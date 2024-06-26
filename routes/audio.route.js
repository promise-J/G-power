const AudioController = require('../controllers/audio.controller')

const router = require('express').Router()


router.post('/audio', async (req, res)=>{
    const mediaController = new AudioController()
    return await mediaController.createAudio(req, res)
})
router.get('/audio/daddy', async (req, res)=>{
    const mediaController = new AudioController()
    return await mediaController.getAllDaddyAudios(req, res)
})
router.get('/audio/mummy', async (req, res)=>{
    const mediaController = new AudioController()
    return await mediaController.getAllMummyAudios(req, res)
})
router.get('/audio', async (req, res)=>{
    const mediaController = new AudioController()
    return await mediaController.getAllAudios(req, res)
})
router.delete('/audio/:audio_id', async(req, res)=>{
    const audioController = new AudioController()
    return await audioController.deleteAudio(req, res)
})
router.put('/audio/:audio_id', async(req, res)=>{
    const audioController = new AudioController()
    return await audioController.editAudio(req, res)
})



module.exports = router