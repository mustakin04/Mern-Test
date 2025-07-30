const Task = require("../models/taskSchema");

// CREATE TASK
const taskController = async (req, res) => {
  try {
    const { title, description, date, priority } = req.body;

    if (!title || !date || !priority) {
      return res.status(400).json({ message: "All required fields must be filled." });
    }

    const task = new Task({ title, description, date, priority });
    const savedTask = await task.save();

    res.status(201).json({
      message: "Task created successfully",
      task: savedTask,
    });
  } catch (error) {
    console.error("Task creation error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// GET ALL TASKS
const getAllTask = async (req, res) => {
  try {
    const allTasks = await Task.find({});
    if (!allTasks || allTasks.length === 0) {
      return res.status(404).json({ message: "No tasks found" });
    }

    res.status(200).json({
      message: "Tasks fetched successfully",
      task: allTasks,
    });
  } catch (error) {
    console.error("Error fetching tasks:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// GET SINGLE TASK BY ID
const getSingleTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({
      message: "Task deleted successfully",
      task,
    });
  } catch (error) {
    console.error("Error fetching task:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { taskController, getAllTask, getSingleTask };
