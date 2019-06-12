const http = require('http');
const express = require('express');
const authRouter = require('auth');

const port = 9000

const homeHandler = (req, res) =>{
    res.send('Hello World')
}

app.all('/', homeHandler)

app.use('/auth', authRouter)

app.listen(port);