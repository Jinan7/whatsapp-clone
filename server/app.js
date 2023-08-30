require('express-async-errors')
const express = require('express')
const dotenv = require('dotenv')
const connect = require('./db/connect')
const { msgrouter } = require('./routers/messageRouter')
const Cors = require('cors')
dotenv.config()

const app = express()
const port = process.env.PORT || 5000
const url = process.env.MONGO_URI

app.use(express.json())
app.use(Cors())
app.use('/api/v1/messages', msgrouter)

app.use(async (err, req, res, next)=>{
    res.send(err.message)
})



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