const mysql = require('mysql2/promise');

const mysqlOption = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DB,
};

const pool = mysql.createPool(mysqlOption);

module.exports = pool;
