const express = require("express")
const path = require("path")
const bcrypt = require("bcrypt")
const collection = require("./config")

const app = express()

app.use(express.json())
app.use(express.urlencoded())


app.set("view engine", "ejs")

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/login", (req, res) => {
    res.render("login")
})

app.get("/register", (req, res) => {
    res.render("register")
})

app.post("/register", async (req, res) => {
    const data = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }

    const existingUser = await collection.findOne({email: data.email})

    if(existingUser) {
        res.send("Létezik ez az email cím! Használjon másikat!")
    } else {
        const hashedPassword = await bcrypt.hash(data.password, 10)

        data.password = hashedPassword

        const userdata = await collection.insertMany(data)
        res.redirect("/login")
    }
})


app.post("/login", async (req, res) => {
    try {
        const check = await collection.findOne({email: req.body.email})
        if(!check) {
            res.send("Nem található email cím!")
        }

        const isPasswordMatch = await bcrypt.compare(req.body.password, check.password)
        if(isPasswordMatch) {
            res.render("index")
        } else {
            res.send("Rossz jelszó!")
        }
    } catch {
        res.send("Hiba!")
    }

})










app.listen(3000, () => {
    console.log(`Mégyen a szerver`);
})