const router = require("express").Router()
const ContestantsModel = require("../../models/contestantsModel");
const adminAuthenticated = require("../../middleware/admin-auth-check")

router.get("/", adminAuthenticated, async (req, res) => {
    const data = await ContestantsModel.find()

    res.status(200).json(data)
})



module.exports = router