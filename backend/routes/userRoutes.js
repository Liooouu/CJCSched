const express = require('express')
const router = express.Router()
const {getAllUsers,getUsers,updateUsers,deleteUsers,createUsers} = require('../controllers/userControllers')


router.route('/').get(getAllUsers).post(createUsers)
router.route('/:id').put(updateUsers).delete(deleteUsers).get(getUsers)

module.exports = router
