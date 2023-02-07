const { matchedData } = require("express-validator")

const {tokenSign} = require("../utils/handleJwt")
const {userModel} = require("../models")

const {encrypt,compare} = require("../utils/handlePassword")

const {handleHttpError} = require("../utils/handleErrors")

/**
 * Registrar un usario
 * @param {*} req 
 * @param {*} res 
 */
const registerCtrl = async (req, res) =>{
    try{
        req = matchedData(req)
        const passwordHash = await encrypt(req.password)
        const body = {...req,password:passwordHash}
        const dataUser = await userModel.create(body)
        dataUser.set("password",undefined,{strict:false})

        const data = {
            token: await tokenSign(dataUser),
            user:dataUser
        }
        res.send({data})
    }catch(e){
        handleHttpError(res,"Error en crear un usario")
    }
}

/**
 * Login un usario
 * @param {*} req 
 * @param {*} res 
 */
const loginCtrl = async (req, res)=>{
    try{
        req = matchedData(req)
        
        const user = await userModel.findOne({email:req.email}).select('password name role email')
        if(!user){
            handleHttpError(res,"usuario no existe", 404)
            return
        }

        const hashPassword = user.password //.get('password')

        const check =await compare(req.password, hashPassword)
        if (!check){
            handleHttpError(res,"password invalida", 401)
            return
        }
        user.set('password', undefined,{strict:false})
        const data = {
            token: await tokenSign(user),
            user
        }
        res.send({data})
    }catch(e){
        
        handleHttpError(res,"Error en login")
    }
}

module.exports = {loginCtrl, registerCtrl}