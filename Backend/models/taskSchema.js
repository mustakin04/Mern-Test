const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  date: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    enum: ["Pending", "InProgress", "Done"],
    default: "Pending",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
});

 module.exports= mongoose.model("Task", taskSchema);

  
