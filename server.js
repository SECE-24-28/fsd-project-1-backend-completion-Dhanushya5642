require("dotenv").config();

const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoutes = require("./Routers/UserRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/user", userRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Backend Running Successfully");
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.log("========== MONGODB ERROR ==========");
    console.error(err);
    console.log("MESSAGE:", err.message);
    console.log("NAME:", err.name);

    if (err.cause) {
      console.log("CAUSE:", err.cause);
    }
  });

// MongoDB Events
mongoose.connection.on("connected", () => {
  console.log("MongoDB Connection Established");
});

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB Disconnected");
});

mongoose.connection.on("error", (err) => {
  console.log("MongoDB Runtime Error:");
  console.error(err);
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});