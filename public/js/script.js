const hamburger = document.querySelector(".hamburger")
const menu = document.querySelector(".menu")
hamburger.addEventListener("click", ()=>{
    menu.classList.toggle("active")
})

const main = [...document.querySelector("main").children]
main.forEach((item, i) => {
    setTimeout(() => {
        item.style.opacity = 1
    }, i * 250)
})


const products = [...document.querySelectorAll(".product")]
let loading = 0
products.forEach((item, i) => {
    loading *= 0.7
    setTimeout(() => {
        item.style.opacity = 1
    }, i * 250 * loading)
})