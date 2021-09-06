const express = require('express')
const multer = require('multer')
const fs = require('fs')
const path = require('path')
const upload = multer({ des: 'public/uploads/' })
const app = express()

// Set static folder
app.use(express.static('public'))

app.post('/upload', upload.single('image'), (req, res) => {
    // console.log(req.file)
    fs.renameSync(req.file,path, path.join(req.file.destination, req.file.originalname))
    res.json({
        status: 'OK',
        message: 'image ajoutée'
    })
})


// Handle 404 responses
app.get('*', (req, res) => {
    res.status(404).send(`This route does not exist.`)
})

// Run Server
const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
