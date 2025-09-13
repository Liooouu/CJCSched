const express = require("express");
const router = express.Router();
const { createUsersAccount, loginUserAccount, verifyUser } = require("../controllers/authControllers");
const { authMiddleware } = require("../middleware/auth");
const { googleLogin } = require("../controllers/googleAuthControllers");

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication endpoints
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: User login
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login success, returns JWT
 *       401:
 *         description: Invalid credentials
 */
/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: User registration
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Bad request (e.g. email already exists)
 */

/**
 * @swagger
 * /auth/google:
 *   post:
 *     summary: Google login (auto-register if not exists)
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               token:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login success (JWT returned)
 */

/**
 * @swagger
 * /auth/verify:
 *   get:
 *     summary: Verify logged-in user
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []   # if using JWT
 *     responses:
 *       200:
 *         description: User is verified
 *       401:
 *         description: Unauthorized
 */




router.post("/register", createUsersAccount);


router.post("/login", loginUserAccount);


router.post("/google", googleLogin);


router.get("/verify", authMiddleware, verifyUser);

module.exports = router;
