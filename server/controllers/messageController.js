const Messages = require("../models/messageModel")
const {StatusCodes} = require("http-status-codes")
   
const createMessage = async (req, res) => {
    console.log("creating message")
    const result = await Messages.create(req.body) 
    return res.status(StatusCodes.CREATED).send()
}

const getAll = async (req, res) => {
    console.log("getting all")
    const result = await Messages.find({})
    return res.status(StatusCodes.OK).send()
}

module.exports = {createMessage, getAll}