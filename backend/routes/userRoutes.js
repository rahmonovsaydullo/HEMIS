const express = require('express')
const { signin, signup } = require('../controllers/userController')
const userRouter = express.Router()

userRouter.post('/login', signin)
userRouter.post('/signup', signup)

module.exports = userRouter