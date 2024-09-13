// // const express = require('express')
// // const create = (req, res) => {
// //     res.status(200).json({
// //         success: true,
// //     });
// // };

// // module.exports = { create }

// -----------------(example-2)----------



const getUser = (req, res) => {
    res.status(200).json({
        success: true,
        message: 'user fetched data successfully',
        data: { id: 1, name: 'kevalsinh' }

    })
}

const createUser = (req, res) => {
    const { name, email } = req.body

    res.status(201).json({
        success: true,
        message: 'create user successfully',
        data: { id: 2, name, email }

    })
}

const users = [
    {
        name: "sauravsinh",
        email: "sauravsinh@gmail.com"
    },
    {
        name: "kevalsinh",
        email: "kvl@123gmail.com"
    },
    {
        name: "bhargav",
        email: "bhargav@gmail.com"
    },
    {
        name: "pilo",
        email: "pilo@gmail.com"
    },
    {
        name: "tushar",
        email: "thushar@gmail.com"
    }

]

const newUser = (req, res) => {
    const { name } = req.body;
    const user = users.find(user => user.name.toLowerCase() === name.toLowerCase());

    if (user) {
        res.json({
            email: user.email
        })
    } else {
        res.status(404).json({ message: 'user  not found' })
    }
}

const upadteUSer = (req, res) => {
    const { id } = req.params
    const { name, email } = req.body
    res.status(200).json({
        success: true,
        message: `user with ID ${id} upadte successfully`,
        data: { name, email }
    })
}

module.exports = { getUser, createUser, upadteUSer, newUser }





