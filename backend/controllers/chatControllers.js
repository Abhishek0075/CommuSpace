const asyncHandler = require("express-async-handler")
const Community = require("../models/communityModel")
const Users = require("../models/usersModel")

const createCommunityChat = asyncHandler(async function(req,res){
    if(!req.body.users || !req.body.communityName || !req.body.idea ){ 
                // If the input to these fields arent given error
        return res.status(400).send({message : "Please fill important fields"})
    }
    if(req.body.users.length <2 ){
        return res.status(400).send("More than 2 users are required to form a group chat")
    }
    let participantUsers
    try{
        participantUsers = await Users.find({_id: {$in: req.body.users}},{password : 0})
    }catch(e){
        console.error(e);
    }
    console.log("Result : ",participantUsers);
    
    try{
        const addCommunity =  await Community.create({
            communityName : req.body.communityName,
            creator :  req.user._id,
            idea : req.body.idea,
            existsFor : req.body.existsFor,
            participants : participantUsers
        })
        if(addCommunity){
            res.status(201).json({
                _id : addCommunity._id,
                communityName : addCommunity.communityName,
                creator :  addCommunity.creator,
                idea : addCommunity.idea,
                existsFor : addCommunity.existsFor,
                participants : addCommunity.participants
            })
        }else{
            res.status(400)
            err = new Error("Failed to Create New User")
            throw err
        }
    }
    catch(err){
        console.log(err);
    }
})

////////////////////////////////////////////////////////

// Need to test it, use authorization bearer token 
// give needed inputs then test
// Date : 16 mar
// One of the user to login
// {
//     "userName" : "Divagar",
//     "DOB" : "2003-03-31",
//     "phone" : "8921545915",
//     "email": "abhi@example.com",
//     "password": "abhi"
// }

// Date : 16 Mar
// Error : Error in line 21,22

// Date : 19 Mar 
// Error in 16 Mar success
////////////////////////////////////////////////////////
module.exports = createCommunityChat