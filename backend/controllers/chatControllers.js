const asyncHandler = require("express-async-handler")
const UserCommunity = require("../models/usersInCommunity")
const Community = require("../models/communityModel")
const Users = require("../models/usersModel")

const createCommunityChat = asyncHandler(async function(req,res){
    if(!req.body.users || !req.body.communityName || !req.body.idea ){ 
                // If the input to these fields arent given error
        return res.status(400).send({message : "Please fill important fields"})
    }
    // console.log("Users  : ",req.body.users);
    // console.log(typeof(req.body.users));
    // console.log(req.user);
    // try {
    //     participantUsers = JSON.parse(JSON.stringify(req.body.users));
    // } catch (e) {
    //     console.error("Invalid JSON string:", req.body.users)
    // }
    // console.log(participantUsers);
    if(participantUsers.length <2 ){
        return res.status(400).send("More than 2 users are required to form a group chat")
    }
    let result
    try{
        result = await Users.find({_id: {$in: req.body.users}})
        // const result = await Users.findById({ _id:{ $in: participantUsers.map(id => ObjectId(id))}})
    }catch(e){
        console.error(e);
    }
    console.log("Result : ",result);
    
    // try{
    //     const addCommunity =  await Community.create({
    //         communityName : req.body.communityName,
    //         creator :  req.user._id,
    //         idea : req.body.idea,
    //         existsFor : req.body.existsFor
    //     })
        
    //     let addUsersToCommunity
    //     for (let index = 1; index <= participantUsers.length; index++) {
    //             addUsersToCommunity = await UserCommunity.create({
    //             participants : req.body.participantUsers[index],
    //             communityId : addCommunity._id
    //         })
    //     }

    //     if(addCommunity){
    //         res.status(201).json({
    //             _id : addCommunity._id,
    //             communityName : addCommunity.communityName,
    //             creator :  addCommunity.creator,
    //             idea : addCommunity.idea,
    //             existsFor : addCommunity.existsFor
    //         })
    //     }else{
    //         res.status(400)
    //         err = new Error("Failed to Create New User")
    //         throw err
    //     }
    //     // }
    //     // if(addUsersToCommunity){
    //     //     res.status(201).json({
    //     //         _id : addUsersToCommunity._id,
    //     //         participants : addUsersToCommunity.participants,
    //     //         communityId : addUsersToCommunity.communityId
    //     //     })
    //     // }else{
    //     //     res.status(400)
    //     //     err = new Error("Failed to Create New User")
    //     //     throw err
    //     // }

    // }
    // catch(err){
    //     console.log(err);
    // }
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