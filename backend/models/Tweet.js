const mongoose = require('mongoose')

const tweetSchema = new mongoose.Schema({
    title: {type: String , required: true},
    content: {type: String},
    tt_image: {type: String},
    tt_video: {type: String}  
})

module.exports = mongoose.model('tweets' , tweetSchema), tweetSchema

