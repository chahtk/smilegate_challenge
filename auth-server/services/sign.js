const { signUpModel, signInModel } = require('../models/sign');

const signUpService = (email, pass, userName) => {
  return signUpModel(email, pass, userName);
};

const signInService = (email, pass) => {
  return signInModel(email, pass);
};

module.exports = { signUpService, signInService };
