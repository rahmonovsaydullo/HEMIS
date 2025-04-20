const express = require('express')
const { signin, signup, getAllUser } = require('../controllers/userController')
const userRouter = express.Router()

userRouter.get('/alluser', getAllUser)
userRouter.post('/login', signin)
userRouter.post('/signup', signup)

module.exports = userRouter