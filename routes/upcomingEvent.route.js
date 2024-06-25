const UpcomingController = require('../controllers/upcoming_events.controller')
const auth = require('../middleware/auth')
const {image_uploader} = require('../middleware/upload')

const router = require('express').Router()


router.post('/upcoming', image_uploader.array('image'),async (req, res)=>{
    const upcomingEvent = new UpcomingController()
    await upcomingEvent.createUpcomingEvent(req, res)
})



module.exports = router