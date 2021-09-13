const mongoose = require('mongoose')

// Mongoose Schema
const RestaurantsSchema = new mongoose.Schema({
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
    cuisine: string,
    priceCategory: Number,
})

const Hotel = mongoose.model('Hotel', HotelSchema)

module.exports = Hotel;
