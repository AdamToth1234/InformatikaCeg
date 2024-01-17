const main = document.querySelector("main")
let prices = []


window.onload = function() {
    fetch("/cart-login-get", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(data => {
        if (data.message == 0) {
            const p = document.querySelector(".cart-status")
            p.style.display = "flex"
        } else {
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
    
                let buttonMinus = document.createElement("button")
                buttonMinus.classList.add("minus")
    
                let iMinus = document.createElement("i")
                iMinus.classList.add("fa", "fa-minus")
                iMinus.style.color = "white"
                iMinus.style.margin = "0"
    
                let input = document.createElement("input")
                input.name = "db"
                input.id = "db"
                input.value = i.db
    
                let buttonPlus = document.createElement("button")
                buttonPlus.classList.add("plus")
    
                let iPlus = document.createElement("i")
                iPlus.classList.add("fa", "fa-plus")
                iPlus.style.color = "white"
                iPlus.style.margin = "0"
    
    
                divProduct.appendChild(img)
                divProduct.appendChild(spanName)
                divProduct.appendChild(divPlusMinusDiv)
    
                divPlusMinusDiv.appendChild(spanPrice)
                divPlusMinusDiv.appendChild(divPlusMinus)
    
                divPlusMinus.appendChild(buttonMinus)
                buttonMinus.appendChild(iMinus)
    
                divPlusMinus.appendChild(input)
    
                divPlusMinus.appendChild(buttonPlus)
                buttonPlus.appendChild(iPlus)
    
    
                main.appendChild(divProduct)
    
    
                let priceString = i.price.split(" ")[0].split(",")
                let price = Number(priceString[0] + priceString[1]) * Number(i.db).toLocaleString("hu-HU")
                prices.push(price)
            }

            let divFinal = document.createElement("div")
            divFinal.classList.add("final")

            let ul = document.createElement("ul")

            let li1 = document.createElement("li")

            let spanFinalPrice = document.createElement("span")
            spanFinalPrice.classList.add("final-price")

            let li2 = document.createElement("li")
            let buttonFinal = document.createElement("button")
            buttonFinal.classList.add("final-button")
            buttonFinal.innerHTML = "Tovább az adatok megadásához"


            divFinal.appendChild(ul)

            ul.appendChild(li1)
            li1.appendChild(spanFinalPrice)

            ul.appendChild(li2)
            li2.appendChild(buttonFinal)
            

            main.appendChild(divFinal)


            const sum = prices.reduce((accumulator, currentValue) => accumulator + currentValue, 0).toLocaleString()
            spanFinalPrice.innerHTML = `Össz érték: <b>${sum} Ft</b>`
        }
    })
}