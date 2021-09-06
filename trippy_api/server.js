const express = require('express')
const app = express()
// Import routers 
const hotelsRouter = require('./routers/hotelsRouter')
const restaurantsRouter = require('./routers/restaurantsRouter')

app.use(express.json())

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