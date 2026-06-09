const express = require("express");
const router = express.Router();

const { signup, login, getAllUsers, verifyAdmin } = require("../Controllers/UserController");

router.post("/signup", signup);
router.post("/login", login);
router.get("/all", verifyAdmin, getAllUsers);

module.exports = router;
