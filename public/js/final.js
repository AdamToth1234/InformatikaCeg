const button = document.querySelector(".final-button")


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