const express=require("express")
const {taskController,getAllTask,getSingleTask} = require("../../controllers/taskController")
const route=express.Router()

route.post("/createTask",taskController)
route.get("/getAllTask",getAllTask)
route.delete("/deletedSingleTask/:id",getSingleTask)

module.exports=route