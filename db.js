const mongoose = require('mongoose')

// define the mongoDB connection URL

// const mongoURL = 'mongodb://localhost:27017/hotels' // replace "hotels " with your database name 

const mongoURL = "mongodb+srv://kevalsinhgohil143:kevalsinh123@cluster0.b0cus.mongodb.net/hotel?retryWrites=true&w=majority&appName=Cluster0"

// set uo mongoDB connection

mongoose.connect(mongoURL, {
    useNewUrlParser: true, useUnifiedTopology: true
})


//get the default connection 

const db = mongoose.connection

db.on('connected', () => {
    console.log('connected to MongoDB server')
})

db.on('error', (err) => {
    console.log(' MongoDB connection error ', err)
})

db.on('disconnected', () => {
    console.log('disconnected to MongoDB server')
})

module.exports = db
