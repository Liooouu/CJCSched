const express = require("express");
const router = express.Router();
const { getAllUsers, getUsersById, createUsers, updateUsers, deleteUsers } = require("../controllers/userControllers");

router.get("/", getAllUsers);
router.get("/:id", getUsersById);
router.post("/", createUsers);
router.put("/:id", updateUsers);
router.delete("/:id", deleteUsers);

module.exports = router;
