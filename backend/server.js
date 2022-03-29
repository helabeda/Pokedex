const express = require('express')
const app = express()
const port = 5000

const connectdb=require('./config/connectDB')
require("dotenv").config()
//connect to database
connectdb()

app.use(express.json())



app.use("/",require("./Routes/pokemonRoute"))

//listen to port 
app.listen(port, (erreur) => 
erreur? console.log(erreur): console.log(`server is running at port ${port}`))