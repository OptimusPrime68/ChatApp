const app = require("express")();
const dotenv=require("dotenv").config();
const express = require("express");
const connectDB = require("./Config/db"); 
const userRoutes= require("./Routes/userRouters");
connectDB();
app.use(express.json());
app.get('/',(req,res)=>
res.send({
    "message":"hemmlo"
})
)
app.post('/',(req,res)=>{
    console.log(req.body); 
    res.send({
        data: req.body
    })
})
app.use('/api/user',userRoutes)
const PORT=process.env.PORT
app.listen(PORT,console.log(`server started at port ${PORT}`))