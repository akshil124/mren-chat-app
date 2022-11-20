const express = require("express")
const { chats } = require("./data/data")
const dotenv = require("dotenv")
dotenv.config()
const PORT = process.env.PORT || 5000
const app = express()

app.get("/", (req, res) => {
    res.send("api started")
})

app.get("/api/chat", (req, res) => {
    res.send(chats)
})

app.get("/api/chat/:id", (req, res) => {
    const singleuser = chats.find(c => c._id === req.params.id)
    res.send(singleuser)
})
app.listen(PORT, console.log("server stated"))