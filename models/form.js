const mongoose = require('mongoose')

const formSchemas = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    Number: {
        type: Number,
        require: true
    },
    email: {
        type: String,
        require: true

    }

})

const formSchema = mongoose.model("formSchema", formSchemas)

module.exports = formSchema