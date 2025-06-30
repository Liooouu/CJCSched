const express = require('express')
const dotenv = require('dotenv')

const app = express()

app.use(express.json())


dotenv.config()
app.get('./',(req,res) => {
   res.send('API is running')
})

const PORT = process.env.PORT || 5000
app.listen(console.log(`server is running in port: ${PORT}`))   