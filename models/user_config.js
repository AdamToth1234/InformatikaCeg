const mongoose = require("mongoose")
const connect = mongoose.connect("mongodb+srv://tothadam1010:OmaHzkRNg9WkZqwu@cluster0.ynjhvlq.mongodb.net/?retryWrites=true&w=majority")


connect.then(() => {
    console.log("Sikeres csatlakozás az adatbázishoz!");
})
.catch(() => {
    console.log("Nem található az adatbázis!")

})


const LoginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})


const collection = new mongoose.model("users", LoginSchema)

module.exports = collection