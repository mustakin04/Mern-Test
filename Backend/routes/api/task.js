const express=require("express")
const {taskController,getAllTask,getSingleTask, updateTask,singleTask} = require("../../controllers/taskController")
const route=express.Router()

route.post("/createTask",taskController)
route.get("/getAllTask",getAllTask)
route.delete("/deletedSingleTask/:id",getSingleTask)
route.patch('/updateTask/:id',updateTask)
route.get("/getSingleTask/:id",singleTask)

module.exports=route