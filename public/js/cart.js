const button = document.querySelector(".cart")
button.addEventListener("click", () => {
    fetch("http://localhost:1000/cart", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: button.getAttribute("data-product-id"),
            kaka: button.getAttribute("data-quantity")
        })
    }).then(res => {
        return res.json()
    })
})

const kaka = document.getElementById("kaka").addEventListener("click", () => {
    fetch("http://localhost:1000/cart", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(data => console.log(data))
})