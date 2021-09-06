const express = require('express')
const app = express()
// Import middlewares
const debug = require('./middlewares/debug')
const transformName = require('./middlewares/transformName')

const superHeros = [
    {
        name: "Iron Man",
        power: ["money"],
        color: "red",
        isAlive: true,
        age: 46,
        image: "https://blog.fr.playstation.com/tachyon/sites/10/2019/07/unnamed-file-18.jpg?resize=1088,500&crop_strategy=smart"
    },
    {
        name: "Thor",
        power: ["electricity", "worthy"],
        color: "blue",
        isAlive: true,
        age: 300,
        image: "https://www.bdfugue.com/media/catalog/product/cache/1/image/400x/17f82f742ffe127f42dca9de82fb58b1/9/7/9782809465761_1_75.jpg"
    },
    {
        name: "Daredevil",
        power: ["blind"],
        color: "red",
        isAlive: false,
        age: 30,
        image: "https://aws.vdkimg.com/film/2/5/1/1/251170_backdrop_scale_1280xauto.jpg"
    }
]

// Parser le body
app.use(express.json());

// Middleware
// Vous pouvez utiliser la librairie `Morgan`
app.use(debug);

// Routes
app.get('/heroes', (req, res) => {
    res.json({
        status: 'OK',
        data: superHeros,
    });
});

app.get('/heroes/:name', (req, res) => {
    const name = req.params.name;

    // // Méthode 1
    // const hero = superHeros.filter(
    //     (obj) => obj.name.toLowerCase().replace(" ", "") === name.toLowerCase()
    // );

    // Méthode 2
    const hero = superHeros.find(
        (obj) => obj.name.toLowerCase().replace(" ", "") === name.toLowerCase()
    );

    res.json({
        status: 'OK',
        data: [hero],
    });
});

app.get('/heroes/:name/power', (req, res) => {
    const name = superHeros.find(
        (obj) => obj.name.toLowerCase().replace(" ", "") === hero.name.toLowerCase()
    );

    res.json({
        status: 'OK',
        heroName: name,
        data: hero.power,
    });
});

app.post('/heroes', transformName, (req, res) => {
    const newHero = req.body;
    superHeros.push(newHero);

    res.json({
        status: 'OK',
        message:`OK, héros ajouté`,
        data: newHero,
    })
})

app.patch('/heroes/:name/power', (req, res) => {
    const name = req.params.name;
    const newPower = req.body.newPower;

    const hero = superHeros.find(
        (obj) => obj.name.toLowerCase().replace(" ", "") === name.toLowerCase()
    );

    hero.power.push(newPower);
    res.json({
        status: 'OK',
        message: `Pouvoir ajouté`,
        data: hero,
    })
})



// Handling 404 responses
app.get('*', (req, res) => {
    res.status(404).send('This route does not exist.');
})

// Handling Error
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

// Run server
const PORT = process.env.PORT || 3000  
app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));