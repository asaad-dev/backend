const express = require('express')
const app = express()
const expressValidator = require('express-validator')

app.use(express.json())

// Router

// Handle 404 responses 
app.use('*', (req, res, next) => {
    res.status(404).send("This route does not exist.")
})

// Run server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))