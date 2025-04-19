const { Pool } = require('pg')

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "hemis",
    password: '12345qwerty',
    port: 5432
})

module.exports = pool



