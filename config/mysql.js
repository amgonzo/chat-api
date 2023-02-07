const mysql = require("mysql")
require('dotenv').config()

const conexion = mysql.createConnection({
    host : process.env.HOST,
    database : process.env.DATABASE,
    user : process.env.USER,
    password : process.env.PASSWORD,
});

const dbConnect = () => {
    
    conexion.connect(function(err) {
        if(!err){
            console.log("conexion correcta")
        }else{
            console.log("conexion con error")
        }
    })
}

module.exports = dbConnect