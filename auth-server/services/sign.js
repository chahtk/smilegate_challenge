const { signUpModel, signInModel } = require('../models/sign');

const signUpService = async (email, pass, userName) => {
  const [success, err] = await signUpModel(email, pass, userName);
  return [success, err];
};

const signInService = async (email, pass) => {
  const [correct, err] = await signInModel(email, pass);
  return [correct, err];
};

module.exports = { signUpService, signInService };
