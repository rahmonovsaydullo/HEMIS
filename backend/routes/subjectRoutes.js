const express = require('express')
const { getSubjects } = require('../controllers/subjectController')
const subjectRouter = express.Router()


subjectRouter.get('/subjects', getSubjects)

module.exports = subjectRouter