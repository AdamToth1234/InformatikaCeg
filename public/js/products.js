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


for (let i = productsShuffleArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [productsShuffleArray[i], productsShuffleArray[j]] = [productsShuffleArray[j], productsShuffleArray[i]];
}


productsShuffle.remove()
while (productsShuffle.firstChild) {
    productsShuffle.removeChild(productsShuffle.firstChild);
}


for (let i of productsShuffleArray) {
    productsShuffle.appendChild(i)
}

content.append(productsShuffle)