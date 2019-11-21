const mysql = require('mysql')

const pool = mysql.createPool({
    connectionLimit: 20,
    user: 'root',
    password: '',
    database: 'flamingo',
    host: 'localhost'
})

module.exports = pool