const pool = require('../config/db')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')



exports.addSubject = async (req, res) => {
    try {
        const { name } = req.body
        const resultSubject = await pool.query(
            'INSERT INTO subjects(name, teacher_id) VALUES($1, $2) RETURNING *',
            [name, null]
        )
        res.status(201).json(resultSubject.rows[0])
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error })
    }
}

exports.getSubjects = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM subjects")
        res.status(200).json(result.rows)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error })
    }
}


