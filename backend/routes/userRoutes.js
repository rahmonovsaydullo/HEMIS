const express = require('express')
const { signin, signup, getAllUser, getTeacher, getStudents } = require('../controllers/userController')
const userRouter = express.Router()

userRouter.get('/alluser', getAllUser)
userRouter.get('/teacher', getTeacher)
userRouter.get('/students', getStudents)
userRouter.post('/login', signin)
userRouter.post('/signup', signup)

module.exports = userRouter