var buttonAdd

setTimeout(() => {
    buttonAdd = document.querySelectorAll(".final-button")[1]
    buttonAdd.addEventListener("click", Click)
}, 1000)

function Click() {
    const input = document.querySelectorAll("input")[4]
    fetch("/coupon-get", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(data => {
        if (input.value == data.message[0].coupon) {
            const priceB = document.querySelectorAll("b")[2]
            const priceString = priceB.innerHTML.split(" ")[0].split(",")
            let price = Number(priceString[0] + priceString[1]) * Number((100 - data.message[0].percentage) / 100)
            priceB.innerHTML = `${price.toLocaleString()} Ft`
            buttonAdd.removeEventListener("click", Click)
            input.value = ""
            alert("Sikeresen hozzáadtad a kuponodat!")
        } else {
            alert("Nincs ilyen kuponkódod!")
        }
    })
}