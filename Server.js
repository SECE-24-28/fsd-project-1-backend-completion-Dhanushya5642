require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoutes = require("./Routers/UserRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/user", userRoutes);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.listen(5000, () => {
  console.log("Server Running on Port 5000");
});
mongoose.connection.on("connected", () => {
  console.log("MongoDB Connected");
});

mongoose.connection.on("error", (err) => {
  console.log("MongoDB Error:", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB Disconnected");
});