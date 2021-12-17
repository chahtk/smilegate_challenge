const pool = require('../config/mysql');
const { signUpQuery, signInQuery } = require('./queries.json');

const signUpModel = async (email, pass, userName) => {
  try {
    const data = [email, pass, userName];
    const conn = await pool.getConnection((connection) => connection);
    await conn.query(signUpQuery, data);
    conn.release();
    return [true, null];
  } catch (err) {
    return [false, err];
  }
};

const signInModel = async (email, pass) => {
  try {
    const data = [email, pass];
    const conn = await pool.getConnection((connection) => connection);
    const result = await conn.query(signInQuery, data);
    conn.release();
    // is correct email, password?
    if (result[0][0]) return [true, null];
    throw new Error('wrong email or password');
  } catch (err) {
    return [false, err];
  }
};

module.exports = { signUpModel, signInModel };
