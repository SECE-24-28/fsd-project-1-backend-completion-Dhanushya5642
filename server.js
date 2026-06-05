const express = require("express");// to import
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const app = express();//to connect to express
app.use(express.json()); // making it to use
app.use(cors());
app.listen(5000,()=>{
    console.log("Server is Running at Port 5000");

}
);

const userroutes = require("./Routers/UserRoutes");
app.use("/api/user",userroutes);

mongoose
.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("MongoDB Connected Successfully");
})
.catch((err)=>{
    console.log("MongoDB Connection Failed");
})
