const asyncHandler = require('express-async-handler')
const Messaging = require('../models/messagingModel')

const sendMessage = asyncHandler(async function(req,res){
    const { communityId, messageContent } = req.body

    if(!messageContent || !communityId){
        console.log("Invalid Data passed into Request")
        return res.sendStatus(400)
    }

    var newMessage = {
        senderId : req.user._id,
        communityId : communityId,
        messageContent : messageContent
    }

    try{
        var message = await Messaging.create(newMessage)
        console.log("Hlo");
        message = await message.populate({
            path : "senderId",
            select : "userName profilePic"
        })
        console.log("Hlo");
        message = await message.populate({
            path : "communityId",
            select : "communityName communityLogo"
        })
        console.log("Hlo");
        res.status(201).json(message)

        }catch(err){
            res.status(404)
            throw new Error(error.message)
    }

})

module.exports = { sendMessage }