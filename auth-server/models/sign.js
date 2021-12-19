const { useQuery } = require('../config/mysql');
const { signUpQuery, signInQuery } = require('./queries.json');

const signUpModel = async (email, pass, salt, userName) => {
  try {
    await useQuery(signUpQuery, [email, pass, salt, userName]);
    return [true, null];
  } catch (err) {
    return [false, err];
  }
};

const signInModel = async (email, pass, salt) => {
  try {
    const result = await useQuery(signInQuery, [email, pass, salt]);

    // result[0][0] : userInfo
    if (result[0][0]) return [result[0][0], null];
    throw new Error('wrong email or password');
  } catch (err) {
    return [false, err];
  }
};

const getSaltByEmail = async (email) => {
  try {
    const query = 'select salt from user where email=?';
    const result = await useQuery(query, [email]);
    if (result[0][0]) return result[0][0];
    throw new Error('no email');
  } catch (err) {
    return [false, err];
  }
};

module.exports = { signUpModel, signInModel, getSaltByEmail };
