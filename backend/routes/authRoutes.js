const express = require("express");
const router = express.Router();
const { createUsersAccount, loginUserAccount, verifyUser } = require("../controllers/authControllers");
const { authMiddleware } = require("../middleware/auth");

// Register
router.post("/register", createUsersAccount);

// Login
router.post("/login", loginUserAccount);

// Verify user (protected)
router.get("/verify", authMiddleware, verifyUser);

module.exports = router;
