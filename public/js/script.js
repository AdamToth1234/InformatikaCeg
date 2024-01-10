const hamburger = document.querySelector(".hamburger")
const menu = document.querySelector(".menu")
hamburger.addEventListener("click", ()=>{
    menu.classList.toggle("active")
})

const main = [...document.querySelector("main").children]
const products = [...document.querySelectorAll(".product")]
console.log(products);


let loading = 0

main.forEach((item, i) => {
    loading += 1
    setTimeout(() => {
        item.style.opacity = 1
    }, i * 250 * loading)
})

products.forEach((item, i) => {
    loading *= 0.7
    setTimeout(() => {
        item.style.opacity = 1
    }, i * 250 * loading)
})