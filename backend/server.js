const app = require("express")();
const dotenv=require("dotenv").config();
const express = require("express");
const connectDB = require("./Config/db"); 
const userRoutes= require("./Routes/userRouters");
const chatRoutes = require("./Routes/chatRoutes")
const messageRoutes = require("./Routes/messageRoutes")

connectDB();
app.use(express.json());

app.use('/api/user',userRoutes)
app.use('/api/chat',chatRoutes);
app.use('/api/message',messageRoutes);
const PORT=process.env.PORT
app.listen(PORT,console.log(`server started at port ${PORT}`))