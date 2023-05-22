const mongoose = require('mongoose')

const DataSchama = new mongoose.Schema({
    name: String,
    email: String,
    tellphone: String,
    password: String,
    birthData: String,
    genus: String
})

const user = mongoose.model('user', DataSchama);
module.exports = user;