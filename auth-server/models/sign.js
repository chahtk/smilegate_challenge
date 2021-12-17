const mysql = require('../config/mysql');
const { signUpQuery, signInQuery } = require('./queries.json');

const signUpModel = (email, pass, userName) => {
  try {
    mysql.getConnection((connectionErr, conn) => {
      if (connectionErr) {
        if (conn) conn.release();
        throw connectionErr;
      }
      conn.query(signUpQuery, [email, pass, userName, 0], (queryErr) => {
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

const signInModel = (email, pass) => {
  try {
    mysql.getConnection((connectionErr, conn) => {
      if (connectionErr) {
        if (conn) conn.release();
        throw connectionErr;
      }
      conn.query(signInQuery, [email, pass], (queryErr) => {
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

module.exports = { signUpModel, signInModel };
