const express=require("express")
const {registrationController,getUser} = require("../../controllers/registrationController")
const loginController = require("../../controllers/loginController")
const route=express.Router()

route.post("/registration",registrationController)
route.post("/login",loginController)
route.get("/getUser",getUser)

module.exports=route