const express = require("express")
const router = express.Router()


router.get("/", checkNotAuthenticated, (req, res) => {
    res.render("index")
})

router.get("/register", checkNotAuthenticated, (req, res) => {
    res.render("register")
})

router.get("/login", checkNotAuthenticated, (req, res) => {
    res.render("login")
})

router.get("/cart", checkNotAuthenticated, (req, res) => {
    res.render("cart")
})

router.get("/webshop", checkNotAuthenticated, (req, res) => {
    res.render("webshop")
})

router.get("/motherboard", checkNotAuthenticated, (req, res) => {
    res.render("motherboard")
})

router.get("/cpu", checkNotAuthenticated, (req, res) => {
    res.render("cpu")
})

router.get("/gpu", checkNotAuthenticated, (req, res) => {
    res.render("gpu")
})

router.get("/ram", checkNotAuthenticated, (req, res) => {
    res.render("ram")
})

router.get("/ssd", checkNotAuthenticated, (req, res) => {
    res.render("ssd")
})

router.get("/hdd", checkNotAuthenticated, (req, res) => {
    res.render("hdd")
})

router.get("/power", checkNotAuthenticated, (req, res) => {
    res.render("power")
})

router.get("/case", checkNotAuthenticated, (req, res) => {
    res.render("case")
})



router.get("/index-login", checkAuthenticated, (req, res) => {
    res.render("index-login", { name: req.user.name})
})

router.get("/cart-login", checkAuthenticated, (req, res) => {
    res.render("cart-login")
})

router.get("/webshop-login", checkAuthenticated, (req, res) => {
    res.render("webshop-login")
})

router.get("/motherboard-login", checkAuthenticated, (req, res) => {
    res.render("motherboard-login")
})

router.get("/cpu-login", checkAuthenticated, (req, res) => {
    res.render("cpu-login")
})

router.get("/gpu-login", checkAuthenticated, (req, res) => {
    res.render("gpu-login")
})

router.get("/ram-login", checkAuthenticated, (req, res) => {
    res.render("ram-login")
})

router.get("/ssd-login", checkAuthenticated, (req, res) => {
    res.render("ssd-login")
})

router.get("/hdd-login", checkAuthenticated, (req, res) => {
    res.render("hdd-login")
})

router.get("/power-login", checkAuthenticated, (req, res) => {
    res.render("power-login")
})

router.get("/case-login", checkAuthenticated, (req, res) => {
    res.render("case-login")
})



function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }

    res.redirect("/")
}

function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect("/index-login")
    }
    next()
}

module.exports = router