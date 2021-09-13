const express = require('express')
const dotenv = require("dotenv");
dotenv.config({
    path: "./config.env",
});
const mongoose = require('mongoose')
const app = express()
app.use(express.json());
// Import Models
const Student = require('./models/student.model')
const Address = require('./models/address.model')

// Connexion à MongoDB
mongoose
	.connect(process.env.DB, {
		useNewUrlParser: true,
	})
	.then(() => {
		console.log("Connected to MongoDB !");
	});

// Routes
app.get('/students', async (req, res) => {
    try {
        const students = await Student.find();

        res.json({
            message: 'OK',
            data: students,
        });
    } catch (err) {
        res.status(404).json({
            message: err,
        })
    }
 })

 app.post('/students', async (req, res) => {
     await Student.create(req.body);

     res.json({
         message: 'OK',
     });
 });

// Récupération
app.get('/students/:id', async (req, res) => {
    const student = await Student.findById(req.params.id).populate("address")

    res.json({
        message: 'OK',
        data: student,
    })
})



// Run server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server started listening on port ${PORT}`))