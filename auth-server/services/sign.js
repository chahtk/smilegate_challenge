const { signUpModel, signInModel, getSaltByEmail } = require('../models/sign');
const jwt = require('../utils/jwt');
const encrypt = require('../utils/encrypt');

const signUpService = async (email, pass, userName) => {
  const { pwd, salt } = await encrypt(pass, undefined);

  const [success, err] = await signUpModel(email, pwd, salt, userName);
  return [success, err];
};

const signInService = async (email, pass) => {
  // get pass(db), salt from DB by mail
  const { salt: saltFromDB } = await getSaltByEmail(email);

  // encrypt(pass, salt) === pass(db) ?
  const { pwd, salt } = await encrypt(pass, saltFromDB);

  const [user, err] = await signInModel(email, pwd, salt);

  if (err) return [false, err];

  const token = await jwt.sign(user);
  return [{ token, user: user.name }, err];
};

module.exports = { signUpService, signInService };
