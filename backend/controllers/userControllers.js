const asyncHandler = require("express-async-handler");
const User = require("../Models/userModel");
const generateToken = require("../Config/generateToken")
const registerUser= asyncHandler( async (req,res)=>{
    const {name,email,password,picture} = req.body;
    console.log(req.body);
    if(!name || !email || !password){
        res.status(400);

        throw new Error("Enter all feilds")
    }

    const userExists = await User.findOne({email});
    if(userExists){
        res.status(400);

        throw new Error("User already exists")
    }
    const user = await User.create({
        name,
        email,
        password,
        picture,
    })
    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            picture: user.picture,
            token: generateToken(user._id),
        });
    }
    else{
        res.status(400);

        throw new Error("Failed to create user")
    }
});
const authUser = asyncHandler( async(req,res)=>{
    const {email,password} = req.body
    const user = await User.findOne({email})
    console.log(user)
    if(user && (await user.matchPassword(password))){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            picture: user.picture,
            token: generateToken(user._id),
        })
    }
    else{
        res.send(401)
        throw new Error("Invalid Email or Password")
    }
}

)

module.exports = {registerUser,authUser};