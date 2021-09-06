const express = require('express')
const router = express.Router()
// Import Controller
const usersController = require('../controllers/usersController') 

router.get('/', usersController.getAllUsers)
router.post('/users', usersController.addNewUser, userValidator)
router.get('/users/:username', usersController.getOneUser)

module.exports = router;