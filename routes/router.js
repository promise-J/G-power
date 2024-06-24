const router = require('express').Router()
const userRoute = require('./user.route')
const mediaRoute = require('./media.route')

router.use('/users', userRoute)
router.use('/media', mediaRoute)

module.exports = router