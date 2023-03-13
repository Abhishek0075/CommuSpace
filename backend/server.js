const express = require("express")
const chats = require("./data/data.js")
const dotenv = require("dotenv")
const connectDB = require("./config/DBConnection.js")
const userRoutes = require("./routes/userRoutes.js")
const { notFound, errorHandler } = require("./middleware/errorMiddleware.js")

const app = express()
app.use(express.json()) // accept JSON file

dotenv.config() // helps to read the env file
connectDB() // IN config/db.js

app.get("/",function(req,res){
    res.send("API is running")
})

app.get("/chats",function(req,res){
    res.send(chats)
})

app.get("/chats/:id",function(req,res){
    // console.log(req.params.id);
    const singleChat = chats.find((c)=>c._id === req.params.id) // find gives the elements of a list
    res.send(singleChat)                               // satisfying the given condition
})

app.use("/user",userRoutes)
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 3000

app.listen(PORT,console.log("Server Started on PORT ",PORT));