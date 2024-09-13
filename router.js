// // const express = require('express')
// // const router = express.Router()
// // const userController = require('./userController')

// // router.get('/create', userController.create);

// // module.exports = router

// -------------------(exapmple-2)------------




const express = require('express')

const router = express.Router()

const userController = require('./userController');


router.get('/getUser', userController.getUser)
router.post('/createUser', userController.createUser)
router.post('/newUser', userController.newUser)
router.put('/upadteUser', userController.upadteUSer)


module.exports = router


