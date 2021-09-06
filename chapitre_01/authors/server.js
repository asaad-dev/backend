const express = require('express');

const app = express();

var authors = [
    {
        name: "Lawrence Nowell",
        nationality: "UK",
        books: ["Beowulf"]
    },
    {
        name: "William Shakespeare",
        nationality: "UK",
        books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"]
    },
    {
        name: "Charles Dickens",
        nationality: "US",
        books: ["Oliver Twist", "A Christmas Carol"]
    },
    {
        name: "Oscar Wilde",
        nationality: "UK",
        books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
    },
]


//Routes
// Exo - 01
app.get("/", (req, res) => {
    res.json({
        message: "Authors API",
    });
});


// Exo - 02
app.get("/authors/:id", (req, res) => {
    var id = req.params.id;
    
    res.send(`${authors[id-1].name}, ${authors[id-1].nationality}`);
    // var author = authors[id];
});


// Exo - 03
app.get("/authors/:id/books", (req, res) => {
    var id = req.params.id;

    res.send(`${authors[id-1].books.join(", ")}`);
});


// Exo -04
app.get("/json/authors/:id", (req, res) => {
    let id = req.params.id-1;
    let author = authors[id]
    
    res.json({
        name: author.name,
        nationality: author.nationality
    });
});


app.get("/json/authors/:id/books", (req, res) => {
    let books = req.params.id-1;
    
    res.send(`${authors[id-1].books.join(", ")}`)
});




// Error hundling
app.get("*", (req, res) => {
    res.status(404).json({
        status: "error",
        message: "Cannot find the route you asked for"
    });
});

//Run server
app.listen(300, () => {
    console.log("Listening on port 300");
});