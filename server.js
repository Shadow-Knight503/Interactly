require("dotenv").config()
const express = require('express')
const server =  express()
const userRouter = require('./api/users/user.router')

server.use(express.json())

server.use('/api/users/', userRouter)

server.listen(process.env.APP_PORT, () => {
    console.log(`Server is running on ${process.env.APP_PORT}`)
})