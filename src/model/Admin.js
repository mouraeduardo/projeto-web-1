const mongoose = require('mongoose')

const DataSchama = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const admin = mongoose.model('admin', DataSchama);
module.exports = admin;