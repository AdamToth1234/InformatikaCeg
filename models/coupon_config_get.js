const mongoose = require("mongoose")

async function couponGet(email) {
    await mongoose.connect("mongodb+srv://tothadam1010:OmaHzkRNg9WkZqwu@cluster0.ynjhvlq.mongodb.net/?retryWrites=true&w=majority")

    const collection = mongoose.connection.db.collection(`${email} (kupon)`)
    return await collection.find({}).toArray()
}

module.exports = couponGet