const express = require('express');

const app = express();

//Run server
app.listen(300, () => {
    console.log("Listening on port 300");
});

// Error hundling
app.get("*", (req, res) => {
    res.status(404).json({
        status: "error",
        message: "Cannot find the route you asked for"
    });
});


//Routes
// Exo - 01
app.get("/", (req, res) => {
    res.json({
        message: "Authors API",
    });
});


// Exo - 02
app.get("/authors/1/", (req, res) => {
    res.json({
        name: "Lawrence Nowell",
        nationality: "UK"
    });
});

app.get("/authors/2/", (req, res) => {
    res.json({
        name: "William Shakespeare",
        nationality: "UK"
    });
});

app.get("/authors/3/", (req, res) => {
    res.json({
        name: "Charles Dickens",
        nationality: "US"
    });
});

app.get("/authors/4/", (req, res) => {
    res.json({
        name: "Oscar Wilde",
        nationality: "UK"
    });
});


// Exo - 03
app.get("/authors/1/books/", (req, res) => {
    res.json({
        books: "Beowulf"
    });
});

app.get("/authors/2/books/", (req, res) => {
    res.json({
        books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"]
    });
});

app.get("/authors/3/books/", (req, res) => {
    res.json({
        books: ["Oliver Twist", "A Christmas Carol"]
    });
});

app.get("/authors/4/books/", (req, res) => {
    res.json({
        books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
    });
});


// Exo -04
app.get("/json/authors/:id", (req, res) => {
    let id = req.params.id;
    
    res.json({
        name: "Lawrence Nowell",
        nationality: "UK"
    });
});


app.get("/json/authors/:id/books", (req, res) => {
    let books = req.params.id + req.params.books;
    
    res.json({
        books: "Beowulf"
    });
});

