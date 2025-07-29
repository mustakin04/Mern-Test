require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser"); // ✅ REQUIRED
const dbConnection = require("./config/bd.config");
const route = require("./routes");

const app = express();
const PORT = process.env.PORT || 3002;

// 🧠 Connect to MongoDB
dbConnection();

// ✅ Middlewares
app.use(express.json());
app.use(cookieParser()); // 🔥 Enables req.cookies
app.use(cors({
  origin: "http://localhost:5173", // your frontend URL
  credentials: true, // 🔥 ALLOW sending cookies
}));

// ✅ Routes
app.use(route);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
