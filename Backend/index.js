require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnection = require("./config/bd.config");
const route  = require("./routes");

const app = express();
const PORT = process.env.PORT || 3002;

dbConnection();

app.use(cors());
app.use(express.json());
app.use(route)
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
