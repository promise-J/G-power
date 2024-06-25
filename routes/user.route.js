const UserController = require('../controllers/user.controller')
const auth = require('../middleware/auth')
const {image_uploader} = require('../middleware/upload')

const router = require('express').Router()


router.post('/register', async (req, res)=>{
    const userController = new UserController()
    return await userController.register(req, res)
})

router.post('/login', async (req, res)=>{
    const userController = new UserController()
    return await userController.login(req, res)
})

router.get('/profile', [auth], async (req, res)=>{
    const userController = new UserController()
    return await userController.getProfile(req, res)
})

router.post('/file-upload', [image_uploader.single('image')], async (req, res)=>{
    const userController = new UserController()
    return await userController.uploadFile(req, res)
})

module.exports = router