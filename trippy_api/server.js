const express = require('express')
const app = express()
// Import routers 
const hotelsRouter = require('./routers/hotelsRouter')
const restaurantsRouter = require('./routers/restaurantsRouter')
// Import config.env
const dotenv = require('dotenv')
dotenv.config({
    path: "./config.env",
})
// Import mongoose
const mongoose = require ("mongoose")

app.use(express.json())

// Connection to MongoDB
mongoose   
    .connect(process.env.DB, {
    useNewUrlParser: true,
    })
    .then(() => {
    console.log("Connected to MongoDB !");
    });


const RestaurantSchema = new mongoose.Schema({
    name: String,
    city: String,
});

// Model
const Restaurant = mongoose.model('Restaurant', RestaurantSchema)

// Routers
app.use(hotelsRouter)
app.use(restaurantsRouter)

// Handle 404 responses 
app.use('*', (req, res, next) => {
    res.status(404).send("This route does not exist.")
})

// Run server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))