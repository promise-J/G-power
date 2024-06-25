const mongoose = require('mongoose')

const UpcomingEventsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true,
    },
    image: {
        type: {},
        required: true
    },
    location: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    }
},{
    timestamps: true
})



const UpcomingEventsModel = mongoose.model('UpcomingEvents', UpcomingEventsSchema)

module.exports = UpcomingEventsModel
