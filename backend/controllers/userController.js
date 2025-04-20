const pool = require('../config/db')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


exports.signup = async (req, res) => {
    try {
        const { first_name, last_name, user_name, password } = req.body
        const result = await pool.query(
            `SELECT * FROM USERS WHERE user_name = $1 LIMIT 1`,
            [user_name]
        )


        const salt = await bcrypt.genSalt(10)
        const encryptedPassword = await bcrypt.hash(password, salt)
        const res = await pool.query(
            `INSERT INTO users(first_name, last_name, user_name, password) VALUES ($1, $2, $3, $4) RETURNING *`,
            [first_name, last_name, user_name, encryptedPassword]
        );
        res.status(201).json(res.rows);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error + 'Internal server error on user controller' })

    }
}


