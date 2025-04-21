const express = require('express')
const { getSubjects, addSubject } = require('../controllers/subjectController')
const subjectRouter = express.Router()


subjectRouter.get('/subjects', getSubjects)
subjectRouter.post('/subjects', addSubject)

module.exports = subjectRouter