const router = require("express").Router()
const ContestantsModel = require("../models/contestantsModel");



router.get("/dashboard", async (req, res) => {
    const contestants = await ContestantsModel.find().sort({ votes: -1 })
    let totalVotes = 0;
    contestants.forEach(contestant => {
        totalVotes += contestant.votes
        // votes.push(contestant.votes)
    }),

        res.render("dashboard", { contestants, totalVotes })
})

// router.get("/dashboard/contestants", (req, res) => {
//     res.render("dashboard")
// })

router.post("/dashboard/contestants", async (req, res) => {
    const contestant = new ContestantsModel(req.body)
    const data = await contestant.save()
    res.status(200).json({
        body: data
    })
})


router.put("/dashboard/contestants/:id", async (req, res) => {
    let votes
    if (req.body.operation === "-1") { votes = -req.body.newVotes }
    else { votes = req.body.newVotes }
    const contestant = await ContestantsModel.findOneAndUpdate({ _id: req.params.id }, { $inc: { votes: votes } }, { new: true })
    // contestant.votes += 1 * req.body.newVotes
    // const data = await contestant.save()
    // console.log(contestant)
    res.redirect(`/admin/${contestant.name}`)
    // res.status(200).json(contestant)
})

router.get("/dashboard/contestants", async (req, res) => {
    const contestants = await ContestantsModel.find()
    res.status(200).json(contestants)

})
router.get("/:name", async (req, res) => {
    const contestant = await ContestantsModel.findOne({ name: req.params.name })
    res.render("contestants", { contestant })

})


module.exports = router