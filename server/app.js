const express = require('express')
const dotenv = require('dotenv')
const connect = require('./db/connect')

dotenv.config()

const app = express()
const port = process.env.PORT || 5000
const url = process.env.MONGO_URI





const start = async (url) =>{
    try{
        await connect(url)
        app.listen(port, ()=>{
            console.log(`server is listening on port ${port}`)
        })
    }catch (e) {
        console.log(e)
    }
}

start(url)