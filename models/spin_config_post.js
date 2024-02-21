const mongoose = require("mongoose")

const SpinSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    }
})

async function Spin(email) {
    const connect = mongoose.connect("mongodb+srv://tothadam1010:OmaHzkRNg9WkZqwu@cluster0.ynjhvlq.mongodb.net/?retryWrites=true&w=majority")

    const SpinModel = mongoose.model("spin", SpinSchema, "spin")
    const data = {
        email: email
    }

    SpinModel.insertMany(data)
}

module.exports = Spin