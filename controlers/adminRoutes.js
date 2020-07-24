const router = require("express").Router()
const ContestantsModel = require("../models/contestantsModel");



router.get("/dashboard", (req, res) => {
    res.render("dashboard")
})

router.get("/dashboard/contestants", (req, res) => {
    res.render("dashboard")
})

router.post("/dashboard/contestants", async (req, res) => {
    const contestant = new ContestantsModel(req.body)
    const data = await contestant.save()
    res.status(200).json({
        body: data
    })
})





module.exports = router