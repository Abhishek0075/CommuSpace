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
        

        idea : {
            type : String,
            trim : true
        },
       
    }, 
    {
        timestamps : true
    }
);

const Community = mongoose.model("Community", communityModel)

module.exports = Community;