const mysql = require('mysql2/promise');

const mysqlOption = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DB,
};

const pool = mysql.createPool(mysqlOption);

const useQuery = async (query, data) => {
  const conn = await pool.getConnection((connection) => connection);
  const result = await conn.query(query, data);
  conn.release();
  return result;
};

module.exports = { pool, useQuery };
