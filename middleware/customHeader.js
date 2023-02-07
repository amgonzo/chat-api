const customHeader=(req, res, next)=>{
    try{

        const apiKey = req.headers.api_key
        if (apiKey === 'Vale')
        {
            next()
        }else{
            res.status(403)
        res.send({error:"Api key no es correcta"})
        }

    }catch(e)
    {
        res.status(403)
        res.send({error:"Algo ocurrio"})
    }
}

module.exports = customHeader