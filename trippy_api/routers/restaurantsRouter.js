const express = require('express')
const router = express.Router()

// Import Restaurants Controller
const restaurantsController = require('../controllers/restaurantsController')

// Routes
router.get('/restaurants', restaurantsController.getAllRestaurants)
router.get('/restaurants/:id', restaurantsController.getRestaurantById)
router.post('/restaurants', restaurantsController.addNewRestaurant)
router.put('/restaurants/:id?name=newName', restaurantsController.updateRestaurant)

module.exports = router;