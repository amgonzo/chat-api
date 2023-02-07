const mongoose = require("mongoose")

mongoose.set('strictQuery', false);

const dbConnect = () => {
    const DB_URI = process.env.DB_URI
    mongoose.connect(DB_URI,{
        useNewUrlParser: true,
        useUnifiedTopology:true,
    }),(err,res)=>{
        if(!err){
            console.log("conexion correcta")
        }else{
            console.log("conexion con error")
        }
    }

}

module.exports = dbConnect
//exports.dbConnect = dbConnect;