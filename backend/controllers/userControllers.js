
let createdNewUsers = []
let newUsersId = [1]


const getUsers = (req,res)=> {
    const id = req.body.params
    const usersDatabase = createdNewUsers.findOne(e => e.id === id)
    res.status(200).json(usersDatabase)
}
const getAllUsers = (req,res)=> {
    res.status(200).json(createdNewUsers)
}
const createUsers = (req,res)=> {
    const {name, email, password} = req.body

    try{
        if(!name || !email || !password){
            throw new Error("Fill up the missing fields!");
        }

        const newUsers = {
            id: newUsersId++,
            name, 
            email, 
            password
        }

        createdNewUsers.push(newUsers)
        res.status(200).json({message: "users succesfully created", user:newUsers})

    }catch(e){
        res.status(404).json({message: "failed to create", error:e.message})
    }
}
const updateUsers = (req,res)=> {
    const id = req.body.params
    createdNewUsers.deleteOne(e => e.id === id)
    res.status(200).json({message:"updating the users"})
}
const deleteUsers = (req,res)=> {
    const id = req.body.params
    createdNewUsers.deleteOne(e => e.id === id)
    res.status(200).json({message:"delete users"})
}


module.exports = {getAllUsers,getUsers,createUsers,updateUsers,deleteUsers}


