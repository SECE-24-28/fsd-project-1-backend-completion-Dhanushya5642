const express = require("express");
const router = express.Router();
const {signupUser} = require("../Controllers/UserController");

//create data
router.post("/signup",signupUser);

module.exports = router;