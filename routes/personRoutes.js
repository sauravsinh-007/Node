const express = require('express')

const router = express.Router()

const person = require("../models/person")

router.post('/', async (req, res) => {

    try {
        const data = req.body//the request body contains the person data

        // create a new person document using the mongoose model

        const newPerson = new person(data);

        // save the new person to the database
        const response = await newPerson.save()

        console.log('data saved')

        res.status(200).json(response)

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'internal server error' })
    }

})


router.get('/', async (req, res) => {
    try {
        const data = await person.find()
        console.log('data get successfully')
        res.status(200).json(data)

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'internal server error' })
    }
})


router.get("/:work", async (req, res) => {
    try {
        const workType = req.params.work;

        if (workType === "chef" || workType === "owner" || workType === "manger") {
            const response = await person.find({ work: workType })
            console.log("fetched the data")
            res.status(200).json(response)
        } else {
            res.status(404).json({ error: "invalid work type" })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "internal server error" })

    }

})

router.put("/:id", async (req, res) => {
    try {
        const personId = req.params.id;

        const updatedPerdonData = req.body;
        const response = await person.findByIdAndUpdate(personId, updatedPerdonData, {
            new: true,
            runValidators: true
        })

        if (!response) {
            return res.status(404).json({ error: "person dot found" })
        }

        console.log("data upadated");
        res.status(200).json(response);
    } catch (err) {
        console.log(err)
        res.status(501).json({ error: "internal server error" })
    }
})


router.delete("/:id", async (req, res) => {
    try {
        const personId = req.params.id;

        const response = await person.findByIdAndDelete(personId)

        if (!response) {
            res.status(404).json({ error: "person not found" })
        }
        console.log("data delete")
        res.status(200).json({ message: "person deleted successfully" })

    } catch (err) {
        console.log(err)
        res.status(501).json({ error: "internal server error" })
    }
})
module.exports = router