const asyncHandler = require("express-async-handler")
const Chat = require("../Models/chatModel");
const User = require("../Models/userModel");
const accessChat = asyncHandler(async (req,res)=>{
     const {userId}=req.body;

     if(!userId){
         console.log("UserId param not sent with request")
         return res.sendStatus(400);
     }
     var isChat = await Chat.find({
         isGroupChat: false,
         $and: [
            {users: { $elemMatch: { $eq: req.user._id } } },
            { users: { $elemMatch: { $eq: userId } } },
         ]
     }).populate("users","-password")
     .populate("latestMessage")

     isChat = await User.populate(isChat,{
         path:'latestMessage.sender',
         select:"name picture email",
     });


     if(isChat.length>0){
         res.send(isChat[0]);

     }else{
         var ChatData = {
             chatName: "sender",
             isGroupChat: false ,
             users: [req.user._id, userId],
         }
         try{
             const createdChat = await Chat.create(ChatData);

             const fullChat = await Chat.findOne({ _id: createdChat._id})
             .populate( "users","-password");
             res.status(200).send(fullChat);
         } catch(err){
             res.send(400);
             throw new Error(err.message)
         }
     }

})

const fetchChats = asyncHandler( async (req,res)=>{
    try{
        Chat.find({users:{ $elemMatch: { $eq: req.user._id}}})
        .then( result=> res.send(result));
    } catch (err){
        res.send(401)
        throw new Error("chat not found")
    }
})

const createGroupChat = asyncHandler( async(req,res)=>{
    if(!req.body.users || !req.body.name){
        return res.status(400).send({
            message: "Fill all feilds"
        });
    }
    var users = JSON.parse(req.body.users);
    if(users.length < 2){
        return res.status(400).send(
            "Atlest 2 users are required to form a group"
        )
    }
    users.push(req.user);
    try{
        const groupChat = await Chat.create({
            chatName: req.body.name,
            users: users,
            isGroupChat: true,
            groupAdmin: req.user,
        })
        const fullGroupChat = await Chat.findOne({
            _id:groupChat._id
        }).populate("users","-password")
        .populate("groupAdmin","-password")

        res.status(200).json(fullGroupChat);

    } catch(err){
        res.status(400);
        throw new Error(err.message);
    }
})



module.exports = {accessChat,fetchChats,createGroupChat}