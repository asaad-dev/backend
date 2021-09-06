const express = require('express');
const app = express();
const port = 8000;

const students = [{name: 'Artha'}, {name: 'Laura'}];

//Parser le body
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        status: 'OK',
        data: students,
    })
})

app.get('/students', (req, res) => {
    req.json({
        status: 'OK',
        data: students,
    })
})

app.post('/students', (req, res) => {
    const newStudent = req.body;
    newStudent.id = Math.floor(Math.random() * 10);
    newStudent.created = new Date();

    students.push(newStudent);

    res.json({
        status: 'OK',
        message: 'Student added successfully :)',
        data: newStudent,
    })
})

// Error handling
app.get('*', (req, res) => {
    res.send('This route does not exist.');
})

// Run server
app.listen(port, () => {
    console.log(`Server started, listening on port ${port}`);
});

