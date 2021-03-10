const mongoose = require('mongoose')
const Tweet = require('./Tweet')
const userSchema = new mongoose.Schema({
    username: {type: String , required: true},
    fullname: {type: String},
    avatar: {type: String , default: "avatar.jpg"},
    password: {type: String , required: true},
    email: {type: String , required: true},
    phone: {type: Number},
    tweets: [Tweet]
})