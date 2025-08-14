const express = require("express");
const router = express.Router();
const { createUsersAccount, loginUserAccount, verifyUser } = require("../controllers/authControllers");
const { authMiddleware } = require("../middleware/auth");
const { googleLogin } = require("../controllers/googleAuthControllers");

// Register
router.post("/register", createUsersAccount);

// Login
router.post("/login", loginUserAccount);

// Google Login (auto-register if not exists)
router.post("/google", googleLogin);

// Verify user (protected)
router.get("/verify", authMiddleware, verifyUser);

module.exports = router;
