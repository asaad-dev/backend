const express = require('express');

const app = express();

// Error handling 
app.get('*', (req, res) => {
    res.send('This route does not exist.');
})

//Run server
const port = 300;
app.listen(port, () => {
    console.log("Listening on port" + port);
});

