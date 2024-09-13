const express = require("express")

const router = express.Router()


const menuIteam = require("./../models/menuIteams")

router.post("/", async (req, res) => {
    try {
        const data = req.body;
        console.log('data', data)

        const newMenuData = new menuIteam(data)

        const response = await newMenuData.save(data)
        console.log("menu iteams saved")
        res.status(200).json(data)
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "intrenal server error" })
    }
})

router.get("/", async (req, res) => {
    try {
        const data = await menuIteam.find()
        console.log("data get successfully")
        res.status(201).json(data)
    } catch (err) {
        console.log(err)
        res.status(501).json({ error: "internal server error" })
    }
})

router.get("/:taste", async (req, res) => {
    try {
        const typeofTaste = req.params.taste;

        if (typeofTaste === "sweet" || typeofTaste === "spicy" || typeofTaste === "sour") {
            const response = await menuIteam.find({ taste: typeofTaste })
            console.log("data fettched")
            res.status(200).json(response)
        } else {
            res.status(404).json({ error: "invalid type of taste" })
        }
    } catch (err) {
        console.log(err)
        res.status(501).json({ error: "internal servere error" })
    }
})

router.put("/:id", async (req, res) => {
    try {
        const menuId = req.params.id;
        const upadateMenuData = req.body

        const response = await menuIteam.findByIdAndUpdate(menuId, upadateMenuData, {
            new: true,
            runValidators: true
        })

        if (!response) {
            return res.status(404).json({ error: "menu  not found" })
        }
        console.log("data updated successfullly")
        res.status(200).json(response)
    } catch (err) {
        console.log(err)
        res.status(501).json({ error: "internal server error" })
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const menuId = req.params.id

        const response = await menuIteam.findByIdAndDelete(menuId)

        if (!response) {
            res.status(404).json({ error: "menu  not found" })
        }

        console.log("data delete successfully")
        res.status(401).json({ message: "menu iteam deleted successfully" })

    } catch (err) {
        console.log(err)
        res.status(501).json({ error: "internal server error" })
    }
})


module.exports = router