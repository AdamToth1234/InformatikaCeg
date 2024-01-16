const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const bcrypt = require("bcrypt")
const passport = require("passport")
const flash = require("express-flash")
const session = require("express-session")
const collection = require("./config")
const methodOverride = require("method-override")
const routes = require("./routes/route")


const app = express()

app.set("view engine", "ejs")


const initializePassport = require("./passport-config")
initializePassport(passport,
    email => User.findOne({ email: email }),
    id => User.findById(id)
)


let initialPath = path.join(__dirname, "public")

app.use(bodyParser.json())
app.use(express.json())
app.use(express.static(path.join(initialPath)));
app.use(express.urlencoded({ extended: false }))
app.use(flash())
app.use(session({
    secret: "Kaka",
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride("_method"))
app.use("/", routes)


app.post("/login", checkNotAuthenticated, passport.authenticate("local", {
    successRedirect: "/index-login",
    failureRedirect: "/login",
    failureFlash: true
}))

app.post("/register", checkNotAuthenticated, async (req, res) => {
    const data = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }

    const existingUser = await collection.findOne({ email: data.email })

    if (existingUser) {
        res.render("register", { message: "Létezik ez az email cím! Használjon másikat!" })
    } else {
        const hashedPassword = await bcrypt.hash(data.password, 10)

        data.password = hashedPassword

        const userdata = await collection.insertMany(data)
        res.redirect("/login")
    }
})

app.delete("/logout", checkAuthenticated, (req, res) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        res.redirect("/login");
    });
});

app.post("/cart", checkAuthenticated, (req, res) => {
    console.log(req.body);
})



function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }

    res.redirect("/login")
}

function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect("/index-login")
    }
    next()
}

app.listen(process.env.PORT || 1000)