const {check, validationResult} = require("express-validator")
const validateResults = require("../utils/handleValidator")

const validatorRegister= [
  check("name").exists().notEmpty().isLength({min:3,max:99}),
  check("age").exists().notEmpty().isNumeric(),
  check("password").exists().notEmpty().isLength({min:3,max:15}),
  check("email").exists().notEmpty().isEmail()
]
const validatorLogin = [
  check("password").exists().notEmpty().isLength({min:3,max:15}),
  check("email").exists().notEmpty().isEmail()
]


module.exports = {validatorRegister,validatorLogin}