const express=require("express")
const route=express.Router()
const authRoute=require("./authentication")
const task =require ("./task")
route.use("/authentication",authRoute)
route.use("/task",task)

module.exports=route