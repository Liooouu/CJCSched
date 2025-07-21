const express = require('express')
const dotenv = require('dotenv').config()
const app = express()

const userRoutes = require('./routes/userRoutes')

app.use(express.json())
app.use('/user', userRoutes)

app.get('/', ( req , res ) => {
   res.send('API is running')
})

const PORT = process.env.PORT || 5000
app.listen(PORT ,() => console.log(`server is running in port: ${PORT}`))   