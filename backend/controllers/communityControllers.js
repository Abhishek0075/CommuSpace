const asyncHandler = require("express-async-handler")
const Community = require("../models/communityModel")
const Users = require("../models/usersModel")

const createCommunityChat = asyncHandler(async function(req,res){
    if(!req.body.users || !req.body.communityName || !req.body.idea ){
                // If the input to these fields arent given error
        return res.status(400).send({message : "Please fill important fields"})
    }
    if(req.body.users.length <2 ){
        return res.status(400).send("Add atleast 1 user")
    }
    let participantUsers
    try{
        participantUsers = await Users.find({_id: {$in: req.body.users}},{password : 0})
    }catch(e){
        console.error(e);
    }
    console.log(req.user);
    participantUsers.push(req.user)
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

const propertyChange = asyncHandler(async function(req, res){
    const { communityId, newName, newIdea, newLogo} = req.body

    const updates = {}
    if (newName) {
        updates.communityName = newName
    }
    if (newIdea) {
        updates.idea = newIdea
    }
    if (newLogo) {
        updates.communityLogo = newLogo
    }

    const updateChat = await Community.findByIdAndUpdate({_id : communityId},updates,{
        new : true
    })
    if(updateChat){
        res.json(updateChat)
    }else{
        res.status(400) 
        err = new Error("Failed to Rename the Community")
        throw err
    }
})

const CommunitySearch = asyncHandler(async function(req,res){
    const keyword = req.query.search ?{
        $or : [
            { communityName : {$regex : req.query.search, $options : "i"}}
        ],
    }
    :{}
    console.log(keyword);
    const communities = await Community.find(keyword)
    res.send(communities)
})

const addToGroup = asyncHandler(async function(req,res){
    const { communityId, userId } = req.body

    const added = await Community.findByIdAndUpdate({_id : communityId},{
        
    })
})


module.exports = {createCommunityChat, propertyChange, CommunitySearch}