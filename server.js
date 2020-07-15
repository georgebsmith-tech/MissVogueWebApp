const express = require("express")
const app = express()


app.set("view engine", "ejs")
app.set("views", "./views")

app.use(express.static("public"))
app.use("/css", express.static("/public/css"))



app.get("/", (req, res) => {
    res.render("index")
})

app.get("/contact", (req, res) => {
    res.render("contact")
})


const PORT = process.env.PORT || 8000

app.listen(PORT, (err) => {
    if (err) throw err
    console.log("Now listening to port " + PORT)
})