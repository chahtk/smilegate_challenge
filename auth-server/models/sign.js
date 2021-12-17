const { useQuery } = require('../config/mysql');
const { signUpQuery, signInQuery } = require('./queries.json');

const signUpModel = async (email, pass, userName) => {
  try {
    await useQuery(signUpQuery, [email, pass, userName]);
    return [true, null];
  } catch (err) {
    return [false, err];
  }
};

const signInModel = async (email, pass) => {
  try {
    const result = await useQuery(signInQuery, [email, pass]);

    // result[0][0] : userInfo
    if (result[0][0]) return [true, null];
    throw new Error('wrong email or password');
  } catch (err) {
    return [false, err];
  }
};

module.exports = { signUpModel, signInModel };
