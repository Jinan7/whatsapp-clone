const express = require('express')
const { createMessage, getAll } = require('../controllers/messageController')

const msgrouter = express.Router()


msgrouter.post('/new', createMessage)
msgrouter.get('/sync', getAll)

module.exports = {msgrouter}