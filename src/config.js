const mongoose = require("mongoose")
const connect = mongoose.connect("mongodb://localhost:27017/Users")


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