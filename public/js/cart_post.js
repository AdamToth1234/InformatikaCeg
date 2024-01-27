const cartButton = document.querySelectorAll(".cart")


cartButton.forEach(cartB => {
    cartB.addEventListener("click", () => {
        let id = Number(cartB.parentElement.parentElement.classList[1].split("-")[1])
        let name = cartB.parentElement.parentElement.children[1].innerHTML
        let price = cartB.parentElement.children[0].innerHTML
        let img_url = cartB.parentElement.parentElement.children[0].children[1].src

        fetch("/cart-login-new", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: id,
                name: name,
                price: price,
                img_url: img_url
            })
        }).then(res => {
            return res.json()
        })
    })
})