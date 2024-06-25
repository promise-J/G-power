const UpcomingController = require('../controllers/upcoming_events.controller')
const auth = require('../middleware/auth')
const {image_uploader} = require('../middleware/upload')

const router = require('express').Router()


router.post('/upcoming', image_uploader.array('image'),async (req, res)=>{
    const upcomingEvent = new UpcomingController()
    return await upcomingEvent.createUpcomingEvent(req, res)
})

router.get('/upcoming', async(req, res)=>{
    const upcomingEvent = new UpcomingController()
    return await upcomingEvent.getAllUpcoming(req, res)
})
router.delete('/upcoming/:event_id', async(req, res)=>{
    const upcomingEvent = new UpcomingController()
    return await upcomingEvent.deleteEvent(req, res)
})
router.put('/upcoming/:event_id', image_uploader.array('image'), async(req, res)=>{
    const upcomingEvent = new UpcomingController()
    return await upcomingEvent.editEvent(req, res)
})



module.exports = router