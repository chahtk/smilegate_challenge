const { signUpModel, signInModel } = require('../models/sign');
const jwt = require('../utils/jwt');

const signUpService = async (email, pass, userName) => {
  const [success, err] = await signUpModel(email, pass, userName);
  return [success, err];
};

const signInService = async (email, pass) => {
  const [user, err] = await signInModel(email, pass);

  if (err) return [false, err];

  const token = await jwt.sign(user);
  return [{ token, user: user.name }, err];
};

module.exports = { signUpService, signInService };
