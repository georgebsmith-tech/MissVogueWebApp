const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()

const URI = process.env.URI;
// console.log(URI)
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, (err) => {
    if (err) {
        throw err
        return
    }
    console.log("Database connected!!")
})



const Schema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    password: {
        type: String,
        required: true
    }

})


const Admin = mongoose.model("Admin", Schema)


module.exports = Admin