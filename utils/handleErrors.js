const handleHttpError = (res, message = "algo paso", code=403) => {
    res.status(code)
    res.send({error:message})
}

module.exports = {handleHttpError}