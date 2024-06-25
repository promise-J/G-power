const router = require('express').Router()
const userRoute = require('./user.route')
const mediaRoute = require('./media.route')
const eventRoute = require('./upcomingEvent.route')

router.use('/users', userRoute)
router.use('/media', mediaRoute)
router.use('/events', eventRoute)

module.exports = router