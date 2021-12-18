const jwt = require('jsonwebtoken');
const { secretKey, option } = require('../config/jwt');

const sign = async (user) => {
  const payload = {
    email: user.email,
    admin: user.admin,
  };
  return jwt.sign(payload, secretKey, option);
};

const verify = async (token) => {
  try {
    return jwt.verify(token, secretKey);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { sign, verify };
