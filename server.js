const express = require("express")
const app = express()
const methodOverride = require("method-override")
const ContestantsModel = require("./models/contestantsModel");

const adminRoutes = require("./controlers/adminRoutes");


app.set("view engine", "ejs")
app.set("views", "./views")


app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(methodOverride("_method"))

app.use(express.static("public"))
app.use("/css", express.static("/public/css"))



app.get("/", (req, res) => {
    res.render("index")
})

app.get("/about", (req, res) => {
    res.render("about")
})

app.get("/contact", (req, res) => {
    res.render("contact")
})

app.get("/models", (req, res) => {
    res.render("models")
})
app.get("/lookbook", (req, res) => {
    res.render("lookbook")
})
app.get("/votes", async (req, res) => {
    const contestants = await ContestantsModel.find()
    res.render("votes", { contestants })
})


app.use("/admin", adminRoutes)


const PORT = process.env.PORT || 8000

app.listen(PORT, (err) => {
    if (err) throw err
    console.log("Now listening to port " + PORT)
})