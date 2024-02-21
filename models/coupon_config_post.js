const mongoose = require("mongoose")

const CouponSchema = new mongoose.Schema({
    coupon: {
        type: String,
        required: true
    },
    percentage: {
        type: Number,
        required: true
    }
})

async function Coupon(email, coupon, percentage) {
    const connect = mongoose.connect("mongodb+srv://tothadam1010:OmaHzkRNg9WkZqwu@cluster0.ynjhvlq.mongodb.net/?retryWrites=true&w=majority")

    const CouponModel = mongoose.model(`${email} (kupon)`, CouponSchema, `${email} (kupon)`)
    const data = {
        coupon: coupon,
        percentage: percentage
    }

    CouponModel.insertMany(data)
}

module.exports = Coupon