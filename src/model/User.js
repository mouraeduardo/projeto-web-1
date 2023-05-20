const mongoose = require('mongoose')

const DataSchama = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const user = mongoose.model('user', DataSchama);
module.exports = user;