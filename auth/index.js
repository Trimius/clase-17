const express = require('express');
const AuthRouter = express.Router();

const authHandler = (req, res)=>{
    res.send(`Ruta auth ${req.path}`)
}

AuthRouter.all('/login', authHandler)

AuthRouter.all('/logout', authHandler)

AuthRouter.all('/recovery', authHandler)

module.exports = AuthRouter