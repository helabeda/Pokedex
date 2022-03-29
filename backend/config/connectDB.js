const mongoose=require('mongoose')
// require('dotenv').config();

const connectdb= async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        mongoose.connect("mongodb://localhost:27017/pokemon",{
                useNewUrlParser: "true",
                useUnifiedTopology: "true"
              
        })
        console.log("successfully connect to database :) ")
    } catch (error) {
        console.log(error)
    }
}
module.exports=connectdb