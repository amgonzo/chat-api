const bcrypjs = require("bcryptjs")

/**
 * 
 * @param {*} passwordPlain 
 */
const encrypt = async(passwordPlain) =>{
    const hash = await bcrypjs.hash(passwordPlain,10)
    return hash
}

/**
 * 
 * @param {*} passwordPlain 
 * @param {*} hashPassword
 */
const compare = async(passwordPlain,hashPassword) =>{
    return await bcrypjs.compare(passwordPlain,hashPassword)
}

module.exports = {encrypt,compare}