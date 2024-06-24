const mongoose = require('mongoose')

const audioMessageModel = new mongoose.Schema({
    author: {
        type: String,
        enum: ['mummy', 'daddy'],
        required: true
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
},{
    timestamps: true
})



const AudioMessageModel = mongoose.model('AudioMessage', audioMessageModel)

module.exports = AudioMessageModel
