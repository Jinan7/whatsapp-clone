const mongoose = require('mongoose')

const MessageSchema = mongoose.Schema({
    message:String,
    name:String,
    timeStamp:String,
    received:Boolean
})

const Messages = mongoose.model('message', MessageSchema)

module.exports = Messages