const mongoose = require('mongoose')

// Mongoose Schema
const HotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    city: String,
    coountry: String,
    stars : Number,
    hasSpa: false,
    priceCategory: Number,
})

const Hotel = mongoose.model('Hotel', HotelSchema)

module.exports = Hotel;
