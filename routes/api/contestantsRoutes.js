const router = require("express").Router()
const ContestantsModel = require("../../models/contestantsModel");
const adminAuthenticated = require("../../middleware/admin-auth-check")
const cors = require("cors")

router.get("/", async (req, res) => {
    const data = await ContestantsModel.find()

    res.status(200).json({data})
})

router.post("/",adminAuthenticated,cors(), async (req, res) => {
    const contestant = new ContestantsModel(req.body)
    const data = await contestant.save()
    res.status(200).json({
        body: data
    })
})



module.exports = router