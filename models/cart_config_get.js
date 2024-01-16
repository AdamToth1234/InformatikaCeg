const mongoose = require("mongoose")

async function userCartGet(email) {
    await mongoose.connect("mongodb+srv://tothadam1010:OmaHzkRNg9WkZqwu@cluster0.ynjhvlq.mongodb.net/?retryWrites=true&w=majority")

    const collection = mongoose.connection.db.collection(email)
    return await collection.find({}).toArray()
}

module.exports = userCartGet