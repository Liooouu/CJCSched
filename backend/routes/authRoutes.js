const express = require("express")
const router = express.Router()
const {createUsersAccount,loginUserAccount} = require("../controllers/authControllers")
const {authMiddleware} = require("../middleware/auth")

router.route("/login",authMiddleware).post(loginUserAccount).get(loginUserAccount)
router.route("/register").post(createUsersAccount)




module.exports= router
