const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")

const app = express()

let initialPath = path.join(__dirname, "public")

app.use(bodyParser.json())
app.use(express.static(path.join(initialPath)));

app.get("/", (req, res) => {
    res.sendFile(path.join(initialPath, "/html/index.html"))
})

app.get("/login", (req, res) => {
    res.sendFile(path.join(initialPath, "/html/login.html"))
})

app.get("/register", (req, res) => {
    res.sendFile(path.join(initialPath, "/html/register.html"))
})

app.get("/motherboard", (req, res) => {
    res.sendFile(path.join(initialPath, "/html/motherboard.html"))
})

app.get("/cpu", (req, res) => {
    res.sendFile(path.join(initialPath, "/html/cpu.html"))
})


app.listen(3000)