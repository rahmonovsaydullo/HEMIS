const pool = require('../config/db')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


exports.signup = async (req, res) => {
    try {
        const { first_name, last_name, user_name, password } = req.body
        const userCheck = await pool.query(
            `SELECT * FROM USERS WHERE user_name = $1 LIMIT 1`,
            [user_name]
        )

        const salt = await bcrypt.genSalt(10)
        const encryptedPassword = await bcrypt.hash(password, salt)

        const result = await pool.query(
            `INSERT INTO users(first_name, last_name, user_name, password) VALUES ($1, $2, $3, $4) RETURNING *`,
            [first_name, last_name, user_name, encryptedPassword]
        );
        res.status(201).json(result.rows[0])
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error + 'Internal server error on user controller' })

    }
}


exports.signin = async (req, res) => {
    try {
        const { user_name, password } = req.body
        const result = await pool.query(
            `SELECT id, first_name, last_name, user_name, password FROM users WHERE user_name = $1 `,
            [user_name]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Invalid username or password" });
        }

        const user = result.rows[0]
        // const isValidPassword = await bcrypt.compare(password, user.password)
        // if (!isValidPassword) {
        //     return res.status(404).json({ message: "Invalid username or password" });
        // }

        // const token = jwt.sign({ userId: user.id }, 'Secret key word is bla bla bla', {
        //     expiresIn: '1h'
        // })
        res.status(200).json({ user });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error + 'Internal server error on user login controller' })

    }
}


exports.getAllUser = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM users")
        res.json(result.rows);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error + 'Internal server error' })
    }
}

exports.getTeacher = async (req, res) =>{
    try {
        const result = await pool.query("SELECT * FROM users WHERE role = 'teacher'")
        res.json(result.rows);
    } catch (error) {
        console.log(error);
        res.status(501).json({message: error})
    }
}

exports.getStudents = async (req, res) =>{
    try {
        const result = await pool.query("SELECT * FROM users WHERE role = 'student'")
        res.json(result.rows);
    } catch (error) {
        console.log(error);
        res.status(501).json({message: error})
    }
}