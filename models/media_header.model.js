
const mongoose = require('mongoose')

const mediaHeaderModel = new mongoose.Schema({
    minsitry: {
        type: String,
        required: true,
        default: 'godspower'
    },
    about_header: {
        type: {publicId: String, imageUrl: String}
    },
    mission_header: {
        type: {publicId: String, imageUrl: String}
    },
    vision_header: {
        type: {publicId: String, imageUrl: String}
    },
    gallery_images: {
        type: [{publicId: String, imageUrl: String}]
    },
    gallery_videos: {
        type: [{publicId: String, imageUrl: String}]
    },
},{
    timestamps: true
})



const MediaHeaderModel = mongoose.model('MediaHeader', mediaHeaderModel)

module.exports = MediaHeaderModel
