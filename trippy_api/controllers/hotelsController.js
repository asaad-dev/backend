const hotels = [
	{
		"id": 1,
		"name": "Imperial Hotel",
		"address": "84 av des Champs-Élysées",
		"city": "Paris",
		"country": "France",
		"stars": 5,
		"hasSpa": true,
		"hasPool": true,
		"priceCategory": 3
	},
	{
		"id": 2,
		"name": "The Queen",
		"address": "3 Darwin Street",
		"city": "London",
		"country": "England",
		"stars": 4,
		"hasSpa": true,
		"hasPool": false,
		"priceCategory": 3
	},
	{
		"id": 3,
		"name": "Kiwi land",
		"address": "4587 George St.",
		"city": "Auckland",
		"country": "New-Zealand",
		"stars": 3,
		"hasSpa": false,
		"hasPool": true,
		"priceCategory": 2
	}
]

// 1- Read
const getAllHotels = (req, res) => {
	res.json({
		status: 'OK',
		data: hotels,
	})
}

// Route parameters - Dynamic route
const getHotelById = (req, res) => {
	const params = req.params.id

	res.json({
		status: 'OK',
		message: `Hotel Id : ${params}`,
	})
}

// 2- Create
const addNewHotel = (req, res) => {
	const newHotel = req.body
    hotels.push(newHotel)

    res.json({
        status: 'OK',
        message: 'A new hotel has been added successfully',
        data: newHotel,
    })
}

// Update 
const updateHotel = (req, res) => {
	 
}

module.exports = {
    getAllHotels: getAllHotels,
	getHotelById: getHotelById,
	addNewHotel: addNewHotel,
	updateHotel: updateHotel,
}
