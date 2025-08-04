const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

let UsersDatabase = []


function generateToken (user)  {
    const refreshToken = jwt.sign({id: user.id}, process.env.REFRESH_TOKEN, {expiresIn: '7d'})
    const accessToken = jwt.sign({id: user.id}, process.env.JWT_TOKEN_SECRET, {expiresIn: '1d'})
    return {accessToken, refreshToken}
}





const createUsersAccount = async (req,res)=> {
    const {name, email, password} = req.body
    if(!name || !email || !password){
        return res.status(400).json({message: "Please fill all fields"})
    }
    if(!email.includes("@")){
        return res.status(400).json({message: "Please enter a valid email"})
    }


    const userExists = UsersDatabase.find(user => user.email === email)
    if(userExists) {
        return res.status(400).json({message: "User already exists"})
    }
    const hashPassword = await bcrypt.hash(password,15)
    if(!hashPassword) {
        return res.status(500).json({message: "Error hashing password"})
    }

    const newUser ={
        email,
        name,
        password:hashPassword
    }
    UsersDatabase.push(newUser)
    if(!UsersDatabase.includes(newUser)) {
        return res.status(500).json({message: "Error creating user account"})
    }
    return res.status(201).json({message: "User account created successfully"} )

}
const loginUserAccount = (req,res)=> {
    const {email,password} = req.body
    if(!email || !password) {
        return res.status(400).json({message: "Please fill all fields"})
    }
   const userFromDatabase = UsersDatabase.find(user => user.email === email)    

   if(!userFromDatabase) {
    return res.status(400).json({message: "User does not exist"})   
   }
   const isPasswordisCorrect = bcrypt.compareSync(password, userFromDatabase.password)
   if(!isPasswordisCorrect) {
    return res.status(400).json({message: "Incorrect password"})
   }
   const tokens = generateToken(userFromDatabase)
   return res.status(200).json({
    message: "User logged in successfully",
    user:{
    email: userFromDatabase.email,
    name: userFromDatabase.name,
    token: tokens.refreshToken,
    accessToken: tokens.accessToken
    }
   })

}
const verifyUser = (res,req) => {
    res.status(200).json({
        message: "User is verified",
})
}

module.exports = {createUsersAccount,loginUserAccount, verifyUser}