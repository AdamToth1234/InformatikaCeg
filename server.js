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

app.get("/webshop", (req, res) => {
    res.sendFile(path.join(initialPath, "/html/webshop.html"))
})

app.get("/motherboard", (req, res) => {
    res.sendFile(path.join(initialPath, "/html/motherboard.html"))
})

app.get("/cpu", (req, res) => {
    res.sendFile(path.join(initialPath, "/html/cpu.html"))
})

app.get("/gpu", (req, res) => {
    res.sendFile(path.join(initialPath, "/html/gpu.html"))
})

app.get("/ram", (req, res) => {
    res.sendFile(path.join(initialPath, "/html/ram.html"))
})

app.get("/ssd", (req, res) => {
    res.sendFile(path.join(initialPath, "/html/ssd.html"))
})

app.get("/hdd", (req, res) => {
    res.sendFile(path.join(initialPath, "/html/hdd.html"))
})

app.get("/power", (req, res) => {
    res.sendFile(path.join(initialPath, "/html/power.html"))
})

app.get("/case", (req, res) => {
    res.sendFile(path.join(initialPath, "/html/case.html"))
})


app.listen(3000)