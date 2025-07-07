const express = require('express')
const router = express.Router()

const getUsers = (req,res)=> {
    res.status(200).json({message:"thanks for logging in"})
}
const getAllUsers = (req,res)=> {
    res.status(200).json({message:"get all users"})
}
const createUsers = (req,res)=> {
    res.status(200).json({message:"create users"})
}
const updateUsers = (req,res)=> {
    res.status(200).json({message:"updating the users"})
}
const deleteUsers = (req,res)=> {
    res.status(200).json({message:"delete users"})
}


module.exports = {getAllUsers,getUsers,createUsers,updateUsers,deleteUsers}


