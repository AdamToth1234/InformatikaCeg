const hamburger = document.querySelector(".hamburger")
const menu = document.querySelector(".menu")
hamburger.addEventListener("click", ()=>{
    menu.classList.toggle("active")
})


const observer = new IntersectionObserver((entires) => {
    entires.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show")
        } else {
            entry.target.classList.remove("show")
        }
    })
})

const hiddenElements = document.querySelectorAll(".hidden")
hiddenElements.forEach((el) => observer.observe(el))