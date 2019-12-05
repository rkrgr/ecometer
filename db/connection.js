const mysql = require('mysql');

const config = require('../config/databaseConfig');

const pool = mysql.createPool(config);

pool.on('error', (err) => {
    console.log(err.code);
});

module.exports = pool;
