// userId is a multivalued
// communityId

const mongoose = require("mongoose")
const userCommunityModel = mongoose.Schema(
    {
        participants : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Users"
        },
        communityId : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Community"
        },
    },
    {
        timestamps : true
    }
);

const UserCommunity = mongoose.model("UserCommunity", userCommunityModel)

module.exports = UserCommunity;

////////////////////////////////////////////////////////

// Check the api in postman input check using utube its bit different
// Date : 15 mar

////////////////////////////////////////////////////////