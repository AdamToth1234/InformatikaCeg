setTimeout(cartMinus, 500)


function cartMinus() {
    const minusButton = document.querySelectorAll(".minus")
    minusButton.forEach(minusB => {
        minusB.addEventListener("click", () => {
            let id = Number(minusB.parentElement.parentElement.parentElement.classList[1].split("-")[1])

            fetch("/cart-login-minus", {
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