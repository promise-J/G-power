const MediaHeaderController = require('../controllers/media_header.controller')
const auth = require('../middleware/auth')
const {image_uploader} = require('../middleware/upload')

const router = require('express').Router()


router.post('/mediaHeaderImages', image_uploader.array('image'),async (req, res)=>{
    const mediaController = new MediaHeaderController()
    await mediaController.manageAboutImage(req, res)
})
router.post('/addMediaGallery', image_uploader.array('image'),async (req, res)=>{
    const mediaController = new MediaHeaderController()
    await mediaController.addGallery(req, res)
})
router.get('/mediaHeaderImages', async (req, res)=>{
    const mediaController = new MediaHeaderController()
    await mediaController.getMediaImages(req, res)
})
router.delete('/addMediaGallery/:media_id', async (req, res)=>{
    const mediaController = new MediaHeaderController()
    await mediaController.removeGalleryImage(req, res)
})



module.exports = router