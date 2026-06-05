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
  .then(() => {
    console.log("MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.log("MongoDB Connection Failed");
    console.log(err);
  });

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB Disconnected");
});

app.listen(5000, () => {
  console.log("Server Running on Port 5000");
});