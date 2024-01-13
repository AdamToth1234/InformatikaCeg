const hamburgerProduct = document.querySelector(".hamburger-product")
const webshopNav = document.querySelector(".webshop-nav")
hamburgerProduct.addEventListener("click", ()=>{
    webshopNav.classList.toggle("active")
})

const products = [...document.querySelectorAll(".product")]
let loading = 0
products.forEach((item, i) => {
    loading *= 0.7
    setTimeout(() => {
        item.style.opacity = 1
    }, i * 250 * loading)
})