const mongoose = require('mongoose');

// define the person schema

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
    },
    work: {
        type: String,
        enum: ['chef', 'owner', 'manger'],
        required: true
    },

    mobile: {
        type: Number,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    address: {
        type: String,

    },
    salary: {
        type: Number,
        require: true
    }

});

//create personal model

const person = mongoose.model('person', personSchema);

module.exports = person;


// const mongoose = require("mongoose")

// const personSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         require: true
//     },

//     age: {
//         type: Number,
//         require: true
//     },

//     work: {
//         type: String,
//         enum: ["chef", "owner", "manger"],
//         require: true
//     },

//     number: {
//         type: Number,
//         require: true
//     },
//     email: {
//         type: String,
//         unique: true,
//         require: true
//     },

//     address: {
//         type: String
//     },
//     salary: {
//         type: Number
//     }
// })

// const person = mongoose.model('mongooseSchema', personSchema)

// module.exports = person