const express = require('express')
const expressValidator = require('express-validator')
const app = express()
// Import Routes
const usersRouter = require('./routers/usersRouter')
const studentsController = require('./controllers/studentsController')

app.use(express.json())

// Router
app.use('/', usersRouter)

// Handle 404 responses 
app.use('*', (req, res, next) => {
    res.status(404).send("This route does not exist.")
})

// Run server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))