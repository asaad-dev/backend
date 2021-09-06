const express = require('express')
const router = express.Router()

// Import Hotels Controller 
const hotelsController = require('../controllers/hotelsController')

// Routes
router.get('/hotels', hotelsController.getAllHotels)
router.get('/hotels/:id', hotelsController.getHotelById)
router.post('/hotels', hotelsController.addNewHotel)
router.put('/hotels/:id/?name=newName', hotelsController.updateHotel)


module.exports = router;