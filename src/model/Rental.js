const mongoose = require('mongoose')

const DataSchama = new mongoose.Schema({
    carId: String,
    userId: String,
    confirm: Boolean,
    initialDate: Date,
    finalDate: Date
})

const rental = mongoose.model('rental', DataSchama);
module.exports = rental;