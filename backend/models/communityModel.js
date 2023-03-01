// Community Name
// image
// Creator
// Idea
// Exists For

const mongoose = require("mongoose")
const communityModel = mongoose.Schema(
    {
        communityName : {
            type : String,
            trim : true 
        },
        creator : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Users"
        },

        idea : {
            type : String,
            trim : true
        },

        existsFor : {
            type : String,
            trim : true
        },

        communityLogo : {
            type : String,
            required : true, 
            default : "https://as2.ftcdn.net/v2/jpg/02/29/75/83/1000_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
        },
    },
    {
        timestamps : true
    }
);

const Community = mongoose.model("Community", communityModel)

module.exports = Community;