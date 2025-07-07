const express = require('express')
const router = express.Router()
const {getAllUsers,getUsers,updateUsers,deleteUsers,createUsers} = require('../controllers/userControllers')


router.route('/').get(getAllUsers).get(getUsers)
router.route('/').put(updateUsers).post(createUsers).delete(deleteUsers)

module.exports = router
