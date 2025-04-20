const pool = require('../config/db')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.getSubjects =  async (req,res) =>{
   try {
    const result = await pool.query("SELECT * FROM subjects")
    res.status(200).json(result.rows)
   } catch (error) {
    console.log(error);
    res.status(500).json({message: error})
   }
}