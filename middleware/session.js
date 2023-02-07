const{handleHttpError} = require("../utils/handleErrors")
const {verifyToken}  = require("../utils/handleJwt")

const authMiddleware = async (req, res, next) =>{
try{
    
    if(!req.headers.authorization){
        handleHttpError(res, "no token", 401)
        return
    }
    
    const token = req.headers.authorization.split(' ').pop()
    const dataToken = await verifyToken(token)

    if(!dataToken._id)
    {
        handleHttpError(res, "error id token", 401)
        return
    }
    next()

}catch(e){
    handleHttpError(res, "no session", 401)
}
}

module.exports = authMiddleware