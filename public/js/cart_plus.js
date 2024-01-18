setTimeout(cartPlus, 500)


function cartPlus() {
    const plusButton = document.querySelectorAll(".plus")
    plusButton.forEach(plusB => {
        plusB.addEventListener("click", () => {
            let id = Number(plusB.parentElement.parentElement.parentElement.classList[1].split("-")[1])

            fetch("/cart-login-plus", {
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