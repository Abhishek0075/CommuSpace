const express = require("express")
const chats = require("./data/data.js")
const dotenv = require("dotenv")
const connectDB = require("./config/db.js")

const app = express()
dotenv.config() // helps to read the env file
connectDB()

app.get("/",function(req,res){
    res.send("API is running")
})

app.get("/chats",function(req,res){
    res.send(chats)
})

app.get("/chats/:id",function(req,res){
    // console.log(req.params.id);
    const singleChat = chats.find((c)=>c._id === req.params.id) // find gives the elements of a list
    res.send(singleChat)                                        // satisfying the given condition
})

const PORT = process.env.PORT || 3000

app.listen(PORT,console.log("Server Started on PORT ",PORT));