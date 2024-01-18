const mongoose = require("mongoose")

async function UserCartMinus(email, id) {
    const connect = mongoose.connect("mongodb+srv://tothadam1010:OmaHzkRNg9WkZqwu@cluster0.ynjhvlq.mongodb.net/?retryWrites=true&w=majority")

    const collection = mongoose.connection.db.collection(email)
    await collection.updateOne({id: id}, {$inc: {db: 1}})
    return await collection.find({}).toArray()
}

module.exports = UserCartMinus