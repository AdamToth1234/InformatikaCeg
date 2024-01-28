const hamburgerProduct = document.querySelector(".hamburger-product")
const webshopNav = document.querySelector(".webshop-nav")
hamburgerProduct.addEventListener("click", () => {
    webshopNav.classList.toggle("active")
})



const productsLoading = [...document.querySelectorAll(".product")]
let loading = 0
productsLoading.forEach((item, i) => {
    loading *= 0.7
    setTimeout(() => {
        item.style.opacity = 1
    }, i * 250 * loading)
})


const productsShuffle = document.querySelector(".webshop-products")
const productsShuffleArray = [...productsShuffle.children]
const content = document.querySelector(".content")


let productsShuffleArrayFinal = []
for (let i = 0; i < 9; i++) {
    let number = Math.floor(Math.random() * productsShuffleArray.length)
    productsShuffleArrayFinal.push(productsShuffleArray[number])
    productsShuffleArray.splice(number, 1)
}


productsShuffle.remove()
while (productsShuffle.firstChild) {
    productsShuffle.removeChild(productsShuffle.firstChild);
}


for (let i of productsShuffleArrayFinal) {
    productsShuffle.appendChild(i)
}

content.append(productsShuffle)