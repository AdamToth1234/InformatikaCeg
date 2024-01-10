const hamburger = document.querySelector(".hamburger")
const menu = document.querySelector(".menu")
hamburger.addEventListener("click", ()=>{
    menu.classList.toggle("active")
})

const main = [...document.querySelector("main").children]
console.log(main);

main.forEach((item, i) => {
    setTimeout(() => {
        item.style.opacity = 1
    }, i * 100)
})