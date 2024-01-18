const mongoose = require("mongoose")

async function userCartMinus(email, id) {
    const connect = mongoose.connect("mongodb+srv://tothadam1010:OmaHzkRNg9WkZqwu@cluster0.ynjhvlq.mongodb.net/?retryWrites=true&w=majority")

    const collection = mongoose.connection.db.collection(email)
    await collection.updateOne({id: id}, {$inc: {db: -1}})

    const updatedDocument = await collection.findOne({ id: id });

    if (updatedDocument.db == 0) {
        await collection.deleteOne({id: id})
        return []
    } else {
        return await collection.find({}).toArray()
    }
}

module.exports = userCartMinus