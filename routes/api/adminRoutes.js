const dotenv = require("dotenv")
dotenv.config()

const router = require("express").Router()
const AdminModel = require("../../models/adminModel");

const jwt = require("jsonwebtoken")

const bcrypt = require("bcrypt")



router.post("/login", async (req, res) => {
    const body = req.body
    console.log(body)
    console.log(req.body)
    const data = await AdminModel.findOne({ username: body.username })
    if (data) {
        const isPass = await bcrypt.compare(body.password, data.password)
        if (isPass) {
            const token = await jwt.sign({
                username: data.username,
                user_id: data._id,

            }, process.env.JWT_SECRET_TOKEN_KEY, {
                expiresIn: "14h"
            })
            return res.status(200).json(
                {
                    body: data,
                    token
                }
            )
        } else {
            res.status(401).send("Invalid user name or password")
        }

    } else {
        res.status(401).send("Invalid user name or password")
    }

})

router.post("/", async (req, res) => {
    const password = await bcrypt.hash(req.body.password, 12)
    console.log(password)
    const data = {
        username: req.body.username,
        password
    }
    const admin = new AdminModel(data)
    const savedData = await admin.save()
    res.status(200).json(savedData)
})





module.exports = router