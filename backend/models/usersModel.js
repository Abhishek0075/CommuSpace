// User Name
// profilePic
// Phone
// Email
// DOB
// Password

const mongoose = require("mongoose")
const userModel = mongoose.Schema(
    {
        userName : { 
            type : String,
            trim : true 
        },
        profilePic : {
            type : String,
            required : true, 
            default : "https://as2.ftcdn.net/v2/jpg/02/29/75/83/1000_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
        },
        phone : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Users"
        },

        email : {
            type : String,
            trim : true
        },

        DOB : {
            type : Date
        },

        password : {
            type : String
        }
    },
    {
        timestamps : true
    }

);

const Users = mongoose.model("Users", userModel)

module.exports = Users;