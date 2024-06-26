const router = require('express').Router()
const userRoute = require('./user.route')
const mediaRoute = require('./media.route')
const eventRoute = require('./upcomingEvent.route')
const audioRoute = require('./audio.route')

router.use('/users', userRoute)
router.use('/media', mediaRoute)
router.use('/events', eventRoute)
router.use('/audios', audioRoute)

module.exports = router