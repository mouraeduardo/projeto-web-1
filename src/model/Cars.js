const mongoose = require('mongoose')

const DataSchama = new mongoose.Schema({
    photo: String,
    name: String,
    brand: String,
    color: String,
    price: String,
    daily: String

})

const car = mongoose.model('car', DataSchama);
module.exports = car;