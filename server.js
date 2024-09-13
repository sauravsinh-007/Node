
// const express = require('express');

// const app = express()

// const port = 3000;

// const userRoute = require('./router')

// app.use(express.json())

// app.use('/api/v1/user', userRoute)

// app.use('/', (req, res) => {
//     res.send('hello sauravsinh')
// })

// app.listen(port, () => {
//     console.log(`example app listening at http://localhost:${port}`)
// })




// coneection of the mongodb to node.js

const express = require('express')

const app = express()

const port = 3000

const db = require("./db")
const personRoutes = require("./routes/personRoutes")
const menuIteamRoutes = require("./routes/menuRoutes")
const formRoutes = require("./routes/formRoutes")

const bodyParser = require("body-parser")
app.use(bodyParser.json());

app.use(express.json())

app.get('/', (req, res) => {
    res.send('hello sauravsinh')
})

app.use("/person", personRoutes)
app.use("/menu", menuIteamRoutes)
app.use("/form", formRoutes)

app.listen(3000, () => {
    console.log(' listening on port 3000')
})