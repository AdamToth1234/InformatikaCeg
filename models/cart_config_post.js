const mongoose = require("mongoose")

const CartSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    img_url: {
        type: String,
        required: true
    },
    db: {
        type: Number,
        default: 1
    },
})

async function userCart(email, id, name, price, img_url, db) {
    const connect = mongoose.connect("mongodb+srv://tothadam1010:OmaHzkRNg9WkZqwu@cluster0.ynjhvlq.mongodb.net/?retryWrites=true&w=majority")

    const CartModel = mongoose.model(email, CartSchema, email)
    const data = {
        id: id,
        name: name,
        price: price,
        img_url: img_url,
        db: db
    }

    const collection = mongoose.connection.db.collection(email)
    if (await collection.findOne({id: id})) {
        await collection.updateOne({id: id}, {$inc: {db: 1}})
    } else {
        await CartModel.insertMany(data)
    }
}

module.exports = userCart