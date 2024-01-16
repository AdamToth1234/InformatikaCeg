const mongoose = require("mongoose")

const CartSchema = new mongoose.Schema({
    id_cart: {
        type: Number,
        required: true
    },
    item1: {
        type: String,
        required: true
    },
    item2: {
        type: String,
        required: true
    },
})

async function userCart(email, name, price, test, darab) {
    const connect = mongoose.connect("mongodb+srv://tothadam1010:OmaHzkRNg9WkZqwu@cluster0.ynjhvlq.mongodb.net/?retryWrites=true&w=majority")

    connect.then(() => {
        console.log("Sikeres csatlakozás az adatbázishoz!")
    })
    .catch(() => {
        console.log("Nem található az adatbázis!")

    })

    const CartModel = mongoose.model(email, CartSchema, email)
    const data = {
        id_cart: test,
        item1: name,
        item2: price
    }
    await CartModel.insertMany(data)

}

module.exports = userCart