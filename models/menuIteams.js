// const mongoose = require('mongoose')

// const menuIteams = new mongoose.Schema({
//     name: {
//         type: String,
//         require: true
//     },
//     price: {
//         type: Number,
//         require: true
//     },
//     taste: {
//         type: String,
//         enum: ['sweet ', 'spicy', 'sour'],
//         require: true

//     },
//     is_drink: {
//         type: Boolean,
//         default: false
//     },
//     num_sales: {
//         type: Number,
//         default: 0
//     }
// })

// const menuIteam = mongoose.model('MenuIteam', menuIteams)

// module.exports = menuIteam

const mongoose = require("mongoose")

const menuIteams = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    taste: {
        type: String,
        enum: ['sweet', 'spicy', 'sour'],
        require: true

    },
    is_drink: {
        type: Boolean,
        default: false
    },
    num_sales: {
        type: Number,
        default: 0
    }
})

const menuIteam = mongoose.model("menuIteams", menuIteams)

module.exports = menuIteam