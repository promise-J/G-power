const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
    user_id: {
        type: mongoose
    }
},{
    timestamps: true
})



const BookingModel = mongoose.model('Booking', bookingSchema)

module.exports = BookingModel
