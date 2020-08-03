const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
dotenv.config()



module.exports = function (req, res, next) {
    try {

        const token = req.headers.authorization.split(" ")[1]
        console.log(token)
        const decoded = jwt.verify(token, process.env.JWT_SECRET_TOKEN_KEY)
        req.userData = decoded
        console.log(decoded)
        next()
    } catch (err) {
        res.redirect("/admin/login")
    }

}