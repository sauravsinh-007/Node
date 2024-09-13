const express = require("express")

const router = express.Router()

const formSchema = require("../models/form")

router.post("/", async (req, res) => {
    try {
        const formData = req.body

        const newFormData = new formSchema(formData)

        const response = await newFormData.save(formData)
        console.log("FormData Saved successfully")
        res.status(200).json(formData)
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "interanal server error" })
    }
})

router.get("/", async (req, res) => {
    try {
        const formData = await formSchema.find()
        console.log("data get successfully")
        res.status(201).json(formData)
    } catch (err) {
        console.log(err)
        res.status(501).json({ error: "internal server error" })
    }
})

router.put("/:id", async (req, res) => {
    try {
        const formId = req.params.id
        const updatedFormData = req.body

        const response = await formSchema.findByIdAndUpdate(formId, updatedFormData, {
            new: true,
            runValidators: true
        })
        if (!response) {
            return res.status(404).json({ error: "form id not found" })
        }
        console.log("updated data")
        res.status(201).json(response)

    } catch (err) {
        console.log(err)
        res.status(501).json({ error: "internal server error" })
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const formId = req.params.id

        const response = await formSchema.findByIdAndDelete(formId)

        if (!response) {
            return res.status(404).json({ error: "form id not found" })
        }
        console.log("data deleted")
        res.status(200).json({ message: "data deleted successfully" })
    } catch (err) {
        console.log(err)
        res.status(501).json({ error: "internal server error " })
    }

})

module.exports = router