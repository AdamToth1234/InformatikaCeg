const button = document.querySelector(".final-button")
const products = document.querySelector(".products")
let prices = []



window.onload = function() {
    fetch("/final-login-get", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(data => {
        for(let i of data.message) {
            let divProduct = document.createElement("div")
            divProduct.classList.add("product", `product-${i.id}`)

            let img = document.createElement("img")
            img.src = i.img_url

            let spanName = document.createElement("span")
            spanName.classList.add("name")
            spanName.innerHTML = i.name

            let divPlusMinusDiv = document.createElement("div")
            divPlusMinusDiv.classList.add("plus-minus-div")

            let spanPrice = document.createElement("span")
            spanPrice.classList.add("price")
            spanPrice.innerHTML = i.price

            let divPlusMinus = document.createElement("div")
            divPlusMinus.classList.add("plus-minus")

            let p = document.createElement("p")
            p.innerHTML = `${i.db} darab`


            divProduct.appendChild(img)
            divProduct.appendChild(spanName)
            divProduct.appendChild(divPlusMinusDiv)

            divPlusMinusDiv.appendChild(spanPrice)
            divPlusMinusDiv.appendChild(divPlusMinus)

            divPlusMinus.appendChild(p)


            products.appendChild(divProduct)


            let priceString = i.price.split(" ")[0].split(",")
            let price = Number(priceString[0] + priceString[1]) * Number(i.db).toLocaleString("hu-HU")
            prices.push(price)
        }

        let ul = document.createElement("ul")
        
        let li1 = document.createElement("li")
        li1.classList.add("coupon")

        let divCouponGet = document.createElement("div")
        divCouponGet.classList.add("coupon-get")

        let inputCoupon = document.createElement("input")
        inputCoupon.placeholder = "Kuponkódod"

        let buttonCoupon = document.createElement("button")
        buttonCoupon.classList.add("final-button")
        buttonCoupon.innerHTML = "Hozzáad"

        let divCouponString = document.createElement("div")
        divCouponString.classList.add("coupon-string")

        let pCoupon = document.createElement("p")

        let pPercentage = document.createElement("p")



        let li2 = document.createElement("li")
        let spanFinalPrice = document.createElement("span")
        spanFinalPrice.classList.add("final-price")


        products.appendChild(ul)
        ul.appendChild(li1)
        li1.appendChild(divCouponGet)
        divCouponGet.appendChild(inputCoupon)
        divCouponGet.appendChild(buttonCoupon)
        li1.appendChild(divCouponString)
        divCouponString.appendChild(pCoupon)
        divCouponString.appendChild(pPercentage)
        ul.appendChild(li2)
        li2.appendChild(spanFinalPrice)
        

        const sum = prices.reduce((accumulator, currentValue) => accumulator + currentValue, 0).toLocaleString("hu-HU")
        spanFinalPrice.innerHTML = `Össz érték: <b>${sum} Ft</b>`

        fetch("/coupon-get", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            pCoupon.innerHTML = `Kuponod: <b>${data.message[0].coupon}</b>`
            pPercentage.innerHTML = `Százalék: <b>-${data.message[0].percentage}%</b>`
        })
    })
}

button.addEventListener("click", () => {
    const inputName = document.getElementById("name")
    const inputISZ = document.getElementById("ISZ")
    const inputCity = document.getElementById("city")
    const inputAddress = document.getElementById("address")

    if (inputName.value == "" || inputISZ.value == "" || inputCity.value == "" || inputAddress.value == "") {
        alert("Az összes mezőt ki kell töltened!")
    } else {
        alert("Gratulálunk! A rendelésed sikeresen leadva!")
    }
})