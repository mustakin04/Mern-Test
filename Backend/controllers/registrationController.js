// const bcrypt = require("bcrypt");
// const User = require("../models/User");

const User = require("../models/userSchema");
const emailValidator = require("../utils/email.validator");
const bcrypt = require("bcrypt");
const passwordValidation = require("../utils/passwordValidation");
const jwt = require("jsonwebtoken");

const registrationController = async (req, res) => {
  try {
    const { fullName, email, password, repassword } = req.body;

    // 1️⃣ Basic Validation
    if (!fullName || !email || !password || !repassword) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (!emailValidator(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }
    if (!passwordValidation(password)) {
      return res.status(400).json({
        message:
          "Password must be at include uppercase, lowercase, number, and special character",
      });
    }
    if (password !== repassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "Email already registered" });
    }
    const token = jwt.sign({ id:email }, process.env.JWT_SECRET);
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
      token
    });

    await newUser.save();

    // 5️⃣ Respond with success
    res
      .status(201)
      .json({ message: "User registered successfully", data: newUser });
  } catch (error) {
    console.error("❌ Registration Error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};
const getUser=async(req,res)=>{
        try{
          const user=await User.find({})
          if (!user) {
          return res.status(409).json({ message: "not found" });}
         res.status(201).json({ message: "User found successfully", data: user });
    
        }catch(error){
            console.error("❌ Registration Error:", error.message);
             res.status(500).json({ message: "Server error" });
        }
}

module.exports = {registrationController,getUser};
