const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const bcrypt = require("bcrypt")
const passport = require("passport")
const flash = require("express-flash")
const session = require("express-session")
const collection = require("./config")
const methodOverride = require("method-override")

const app = express()

app.set("view engine", "ejs")


const initializePassport = require("./passport-config")
initializePassport(passport,
    email => User.findOne({ email: email }),
    id => User.findById(id)
)


let initialPath = path.join(__dirname, "public")

app.use(bodyParser.json())
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


app.get("/", checkAuthenticated, (req, res) => {
    res.render("index")
})

app.get("/login", checkNotAuthenticated, (req, res) => {
    res.render("login")
})

app.post("/login", checkNotAuthenticated, passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureMessage: true
}))

app.get("/register", checkNotAuthenticated, (req, res) => {
    res.render("register")
})

app.post("/register", checkNotAuthenticated, async (req, res) => {
    const data = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }

    const existingUser = await collection.findOne({ email: data.email })

    if (existingUser) {
        res.send("Létezik ez az email cím! Használjon másikat!")
    } else {
        const hashedPassword = await bcrypt.hash(data.password, 10)

        data.password = hashedPassword

        const userdata = await collection.insertMany(data)
        res.redirect("/login")
    }
})

app.delete("/logout", checkAuthenticated, (req, res) => {
    req.logOut()
    res.redirect("/login")
})

app.get("/webshop", (req, res) => {
    res.render("webshop")
})

app.get("/motherboard", (req, res) => {
    res.render("motherboard")
})

app.get("/cpu", (req, res) => {
    res.render("cpu")
})

app.get("/gpu", (req, res) => {
    res.render("gpu")
})

app.get("/ram", (req, res) => {
    res.render("ram")
})

app.get("/ssd", (req, res) => {
    res.render("ssd")
})

app.get("/hdd", (req, res) => {
    res.render("hdd")
})

app.get("/power", (req, res) => {
    res.render("power")
})

app.get("/case", (req, res) => {
    res.render("case")
})


function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }

    res.redirect("/login")
}

function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect("/")
    }
    next()
}

app.listen(process.env.PORT || 3000)