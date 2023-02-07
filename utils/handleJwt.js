const jwt = require("jsonwebtoken")
const JWT_SECRET = process.env.JWT_SECRET
/**
 * 
 * @param {*} user 
 */
const tokenSign = async (user) =>{
    const sign = jwt.sign(
        {
            _id:user._id,
            role:user.role
        },
        JWT_SECRET,
        {
            expiresIn:"1h"
        }
    )
    return sign
}

/**
 * 
 * @param {*} tokenJwt 
 */
const verifyToken = async (tokenJwt) =>{
    try{
        return jwt.verify(tokenJwt,JWT_SECRET)
    }catch(e){
        return null
    }
}




module.exports = {tokenSign,verifyToken}