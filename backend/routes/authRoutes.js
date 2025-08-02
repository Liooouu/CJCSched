const express = require("express")
const router = express.Router()
const {createUsersAccount,loginUserAccount} = require("../controllers/authControllers")

router.route("/login").post(loginUserAccount)
router.route("/createaccount").post(createUsersAccount)

module.exports= router
