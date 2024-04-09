const UserController = require('../controllers/user.controller')
const auth = require('../middleware/auth')

const router = require('express').Router()

router.post('/register', async (req, res)=>{
    const userController = new UserController()
    await userController.register(req, res)
})

router.post('/login', async (req, res)=>{
    const userController = new UserController()
    await userController.login(req, res)
})

router.get('/profile', [auth], async (req, res)=>{
    const userController = new UserController()
    await userController.getProfile(req, res)
})

module.exports = router