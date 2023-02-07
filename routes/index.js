const express = require("express")
const fs = require("fs")
const router = express.Router()

const PATH_ROUTES = __dirname

const removeExtension = (filename) => {
    //devuelve track.js [ tracks,js]
    return filename.split(".").shift()
}
const dir = fs.readdirSync(PATH_ROUTES).filter((file) => {
    const name = removeExtension(file) //file = users, storage, tracks 
    if(name != "index"){
        console.log(`cargando ruta ${name}`)
        router.use(`/${name}`,require(`./${file}`)) //http://localhost:3001/api/algo
    }
})


module.exports = router