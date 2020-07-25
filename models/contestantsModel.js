const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()

const URI = process.env.URI;
// console.log(URI)
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        throw err
        return
    }
    console.log("Database connected!!")
})



const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image_url: {
        type: String
    },
    votes: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    state: {
        type: String,
        default: "None"
    },
    id: {
        type: String
    }

})


const Contestant = mongoose.model("Contestant", Schema)


module.exports = Contestant