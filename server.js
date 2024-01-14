if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}

const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const bcrypt = require("bcrypt")
const passport = require("passport")
const flash = require("express-flash")
const session = require("express-session")
const app = express()

const initializePassport = require("./passport-config")
initializePassport(
  passport,
  email => users.find(user => user.email === email),
  id => users.find(user => user.id === id)
)

const users = []

let initialPath = path.join(__dirname, "public")

app.use(bodyParser.json())
app.use(express.static(path.join(initialPath)));
app.use(express.urlencoded({ extended: false }))
app.use(flash())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())


app.get("/", checkAuthenticated, (req, res) => {
  res.sendFile(path.join(initialPath, "/html/index.html"))
})

app.get("/login", checkNotAuthenticated, (req, res) => {
  res.sendFile(path.join(initialPath, "/html/login.html"))
})

app.post("/login", checkNotAuthenticated, passport.authenticate("local", {
  successRedirect: "/webshop",
  failureRedirect: "login",
  failureMessage: true
}))

app.get("/register", checkNotAuthenticated, (req, res) => {
  res.sendFile(path.join(initialPath, "/html/register.html"))
})

app.post("/register", checkNotAuthenticated, async (req, res) => {
  try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10)
      users.push({
          id: Date.now().toString(),
          name: req.body.name,
          email: req.body.email,
          password: hashedPassword
      })
      res.redirect("/login")
  } catch {
      res.redirect("/register")
  }
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

app.listen(3000)