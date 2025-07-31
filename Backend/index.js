require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dbConnection = require("./config/bd.config");
const route = require("./routes");

const app = express();
const PORT = process.env.PORT || 3002;

// 🧠 Connect to MongoDB
dbConnection();

// ✅ Middlewares
app.use(express.json());
app.use(cookieParser());

// ✅ CORS setup for Localhost + Netlify
const allowedOrigins = [
  "https://gilded-pika-fc3137.netlify.app" ,// 🔁 Replace with your actual Netlify site URL
  // "http://localhost:5173",
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));

// ✅ Routes
app.use(route);

// ✅ Default Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// ✅ Server Listen
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
