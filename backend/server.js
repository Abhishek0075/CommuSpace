const express = require("express")
const dotenv = require("dotenv")
const connectDB = require("./config/DBConnection.js")
const userRoutes = require("./routes/userRoutes.js")
const communityRoutes = require("./routes/communityRoutes.js")
const { notFound, errorHandler } = require("./middleware/errorMiddleware.js")
const messageRoutes = require("./routes/messageRoutes.js")

const app = express()
app.use(express.json()) // accept JSON file

dotenv.config() // helps to read the env file
connectDB() // IN config/db.js

app.get("/",function(req,res){
    res.send("API is running")
})

app.use("/user",userRoutes)
app.use("/community",communityRoutes)
app.use("/message",messageRoutes)
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 3000

const server = app.listen(PORT,console.log("Server Started on PORT ",PORT));

const io = require("socket.io")(server, {
    pingTimeout : 60000,
    cors : {
        origin : "https://localhost:3000",
    }
})

io.on("connection", function(socket){
    console.log('connected to socket.io') // dont forget to install socket.io in frontend
})                                       // npm install socket.io-client