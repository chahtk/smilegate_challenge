const { signUpModel } = require('../models/sign');

const signUpService = (email, pass, userName) => {
  return signUpModel(email, pass, userName);
};

module.exports = { signUpService };
