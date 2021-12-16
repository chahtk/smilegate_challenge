const mysql = require('mysql');

const mysqlOption = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DB,
};

const createPool = () => mysql.createPool(mysqlOption);

module.exports = createPool();
