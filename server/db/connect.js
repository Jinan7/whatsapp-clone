const mongoose = require('mongoose')
const Pusher = require('pusher')
const dotenv = require('dotenv')

const pusher = new Pusher({
    appId: "1661232",
    key: "9d98ad2d5ba915745f7c",
    secret: "85c35bf1c41214229c75",
    cluster: "eu",
    useTLS: true
  });
const connect = async (url) => {
    try{
        await mongoose.connect(url)
    }catch (e){
        console.log(e)
    }
}

const db = mongoose.connection
db.once("open",()=>{
    const msgCollection = db.collection("messages")
    const changeStream = msgCollection.watch()
    changeStream.on('change', change =>{
        if(change.operationType === "insert"){
            const msgDetails = change.fullDocument
            pusher.trigger("messages", "inserted", {
                name: msgDetails.name,
                message:msgDetails.message,
                timestamp:msgDetails.timestamp,
                received:msgDetails.received,
            })
            
        } else {
            console.log("error")
        }
    })
})

module.exports = connect