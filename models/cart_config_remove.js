const mongoose = require("mongoose")

async function userCartRemove(email, id) {
    const connect = mongoose.connect("mongodb+srv://tothadam1010:OmaHzkRNg9WkZqwu@cluster0.ynjhvlq.mongodb.net/?retryWrites=true&w=majority")

    const collection = mongoose.connection.db.collection(email)
    await collection.deleteOne({id: id})

    return []
}

module.exports = userCartRemove