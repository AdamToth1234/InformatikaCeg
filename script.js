const hamburger = document.querySelector(".hamburger")
const navbar = document.querySelector("nav")
const menu = document.querySelector(".menu")
hamburger.addEventListener("click", ()=>{
    menu.classList.toggle("active")
})