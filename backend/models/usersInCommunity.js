// userId
// communityId

const mongoose = require("mongoose")
const userCommunityModel = mongoose.Schema(
    {
        userId : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Users"
        },
        creator : {
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