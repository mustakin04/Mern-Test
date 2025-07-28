require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnection = require("./config/bd.config");

const app = express();
const PORT = process.env.PORT || 3002;

dbConnection();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
