const mysql = require('../config/mysql');
const { signUpQuery } = require('./queries.json');

const signUpModel = (email, pass, userName) => {
  const sql = signUpQuery;
  try {
    mysql.getConnection((connectionErr, conn) => {
      if (connectionErr) {
        if (conn) conn.release();
        throw connectionErr;
      }
      conn.query(sql, [email, pass, userName, 0], (queryErr) => {
        if (queryErr) {
          throw queryErr;
        }
        conn.release();
      });
    });
    return [true, null];
  } catch (err) {
    return [false, err];
  }
};

module.exports = { signUpModel };
