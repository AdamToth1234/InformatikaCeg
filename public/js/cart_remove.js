setTimeout(cartRemoveProduct, 500)


function cartRemoveProduct() {
    const removeButton = document.querySelectorAll(".remove")
    removeButton.forEach(removeB => {
        removeB.addEventListener("click", () => {
            let id = Number(removeB.parentElement.parentElement.classList[1].split("-")[1])

            fetch("/cart-login-remove", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: id,
                })
            }).then(res => {
                return res.json()
            })

            location.reload()
    
        })
    })
}