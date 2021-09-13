const { get } = require("../routers/hotelsRouter")

const restaurants = [
	{
		"id": 1,
		"name": "Les trois Mousquetaires",
		"address": "22 av des Champs-Élysées",
		"city": "Paris",
		"country": "France",
		"stars": 4,
		"cuisine": "french",
		"priceCategory": 3
	},
	{
		"id": 2,
		"name": "The Fat Guy",
		"address": "47 Jackson Boulevard",
		"city": "New York",
		"country": "US",
		"stars": 5,
		"cuisine": "burger",
		"priceCategory": 1
	},
	{
		"id": 3,
		"name": "Veggies",
		"address": "77 Avenir Street",
		"city": "Sydney",
		"country": "Australia",
		"stars": 5,
		"cuisine": "vegan",
		"priceCategory": 2
	}
]

// 1- Read
const getAllRestaurants = (req, res) => {
	res.json({
		status: 'OK',
		data: restaurants,
	})
}

// 2- Route parameters - Dynamic route 
const getRestaurantById = (req, res) => {
    const params = req.params.id

    res.json({
        status: 'OK',
        message: `Restaurant id : ${params}`,
    })
}   

// 2- Create
const addNewRestaurant = (req, res) => {
	const newRestaurant = req.body
    restaurants.push(newRestaurant)

    res.json({
        status: 'OK',
        message: 'A new restaurant has been added successfully',
        data: newRestaurant,
    })
}

// Update 
const updateRestaurant = (req, res) => {
	 
}

module.exports = {
	getAllRestaurants: getAllRestaurants,
	getRestaurantById: getRestaurantById,
	addNewRestaurant: addNewRestaurant,
	updateRestaurant: updateRestaurant,
}