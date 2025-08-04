
let database = []
let newUsersId = [1]


const getUsers = (req, res) => {
    const id = Number(req.params.id)

    if(!id){
        return res.status(404).json({message: "Required id number"})
    }
    if(!database.length){
        return res.status(404).json({message:"No users found"})
    }

    const UserFromDatabase = database.find(e => e.id === id)
    if(!UserFromDatabase){
        return res.status(404).json({message:"User not found", id})
    }
    const User = {
        name: UserFromDatabase.name,
        email:UserFromDatabase.email
    }

    return res.status(200).json(User)

}
const getAllUsers = (req,res)=> {
    if(!database.length){
        return res.status(200).json({massage:"no currently users right now"})
    }
    res.status(200).json({message:"This is all the users",database})
}


const createUsers = (req,res)=> {
    const {name, email, password} = req.body

    try{
        if(!name || !email || !password){
            throw new Error("Fill up the missing fields!");
        }
        if(database.find(e => e.email === email)){
            return res.status(404).json({message:"Email already exists, use another email address"})
        }

        const newUsers = {
            id: newUsersId++,
            name, 
            email, 
            password
        }

        database.push(newUsers)
        res.status(200).json({message: "users succesfully created", user: newUsers})

    }catch(e){
        res.status(404).json({message: "failed to create", error:e.message})
    }
}
const updateUsers = (req,res)=> {
    const {name,email} = req.body
    if(!name || !email){
        return res.status(404),json({message:"Nothing to update"})
    }
    const id = Number(req.params.id) 
    if(!id){
        return res.status(404).json({message:"Id is required"})
    }
    const UserFromDatabase = database.findIndex(e => e.id === id)
    if(!UserFromDatabase === -1){
        return res.status(404).json({message:"User not found", id})
    }
   if(name){
    database[UserFromDatabase].name = name 
   }
   if(email){
    database[UserFromDatabase].email = email 
   }

   return res.status(200).json({message:"User successfully updated"})

}
const deleteUsers = (req,res)=> {
    const id = Number(req.params.id)
    if(!id){
        return res.status(404).json({message:"Id is required"})
    }
  
    const user = database.findIndex(e => e.id === id)
    if(user === -1){
        return res.status(404).json({message:"User not found", id})
    }

    if(!database.length){
        return res.status(404).json({message:"user not found", id})
    }
    database.splice(user, 1)
    return res.status(200).json({message:"User successfully deleted", id})

}


module.exports = {getAllUsers,getUsers,createUsers,updateUsers,deleteUsers}


