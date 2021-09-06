const users = [
    {name: 'Oliver', email: 'oliver@gimal.com', age: '30', city: 'Paris'},
    {name: 'John', email: 'john@gimal.com', age: '26', city: 'London'},
]

const getAllUsers = (req, res) => {
    res.json({
        status: 'OK',
        data: users,
    })
}

const addNewUser = (req, res) => {
    const newUser = req.body
    users.push(newUser)

    res.json({
        status: 'OK',
        message: 'A new user has been added successfully',
        data: newUser,
    })
}

const getOneUser = (req, res) => {
    const user = req.params.name
    user.name = user
    users.push(user)
    
    res.json({
        status: 'OK',
        message: 'User infos',
        data: user,
    })
}

const userValidator = (req, res) => { 
    expressValidator.body('username').isUsername({min: 4}),
    expressValidator.body('email').isEmail(),
    expressValidator.body('age').isAge({max: 2}),
    expressValidator.body('city').isCity(''),
    (req, res) => {
        const errors = validationResult(req)  
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()})
        }

        User.create({
            username: req.body.username,
            email: req.body.email,
            age: req.body.age,
            city: req.body.city,
         })
         .then(user => user.res.json(user))
    }
}

module.exports = { 
    getAllUsers: getAllUsers,
    addNewUser: addNewUser,
    getOneUser: getOneUser,
    userValidator: userValidator,
} 
