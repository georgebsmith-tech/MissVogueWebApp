const router = require("express").Router()
const ContestantsModel = require("../models/contestantsModel");

const adminAuthenticated = require("../middleware/admin-auth-check")

const passport = require("passport")

const checkAdminAuthenticated = require("../middleware/authenticated")

const checkNotAuthenticated = require("../middleware/notAuthenticated")


router.get("/login", checkNotAuthenticated, async (req, res) => {

    res.render("admin-login")
})

router.post("/login", passport.authenticate("local", {
    successRedirect: "/admin/dashboard",
    failureRedirect: "/admin/login",
    failureFlash: true

}))


router.get("/dashboard", checkAdminAuthenticated, async (req, res) => {
    const contestants = await ContestantsModel.find()
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