const express = require("express")
const router = express.Router()
const userCartGet = require("../models/cart_config_get")


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

router.get("/cart-login-get", checkAuthenticated, async (req, res) => {
    res.status(200).json({ message: await userCartGet(req.user.email) })
})

router.get("/cart-login", checkAuthenticated, async (req, res) => {
    res.render("cart-login", { name: req.user.name })
})

router.get("/final-login-get", checkAuthenticated, async (req, res) => {
    res.status(200).json({ message: await userCartGet(req.user.email) })
})

router.get("/final-login", checkAuthenticated, (req, res) => {
    res.render("final-login", { name: req.user.name })
})

router.get("/webshop-login", checkAuthenticated, (req, res) => {
    res.render("webshop-login", { name: req.user.name })
})

router.get("/motherboard-login", checkAuthenticated, (req, res) => {
    res.render("motherboard-login", { name: req.user.name })
})

router.get("/cpu-login", checkAuthenticated, (req, res) => {
    res.render("cpu-login", { name: req.user.name })
})

router.get("/gpu-login", checkAuthenticated, (req, res) => {
    res.render("gpu-login", { name: req.user.name })
})

router.get("/ram-login", checkAuthenticated, (req, res) => {
    res.render("ram-login", { name: req.user.name })
})

router.get("/ssd-login", checkAuthenticated, (req, res) => {
    res.render("ssd-login", { name: req.user.name })
})

router.get("/hdd-login", checkAuthenticated, (req, res) => {
    res.render("hdd-login", { name: req.user.name })
})

router.get("/power-login", checkAuthenticated, (req, res) => {
    res.render("power-login", { name: req.user.name })
})

router.get("/case-login", checkAuthenticated, (req, res) => {
    res.render("case-login", { name: req.user.name })
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