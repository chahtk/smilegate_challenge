const { signUpModel, signInModel } = require('../models/sign');
const jwt = require('../utils/jwt');
const encrypt = require('../utils/encrypt');

const signUpService = async (email, pass, userName) => {
  const cryptedPass = encrypt(pass);
  const [success, err] = await signUpModel(email, cryptedPass, userName);
  return [success, err];
};

const signInService = async (email, pass) => {
  const cryptedPass = encrypt(pass);
  const [user, err] = await signInModel(email, cryptedPass);

  if (err) return [false, err];

  const token = await jwt.sign(user);
  return [{ token, user: user.name }, err];
};

module.exports = { signUpService, signInService };
