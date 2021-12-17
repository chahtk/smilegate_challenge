const { signUpService, signInService } = require('../services/sign');

const signUpController = async (req, res) => {
  const { email, pass, userName } = req.body;

  if (!(email && pass && userName)) return res.status(400).end();

  const [success, err] = await signUpService(email, pass, userName);

  if (success) res.status(201).end();
  else res.status(400).end();
};

const signInController = async (req, res) => {
  const { email, pass } = req.body;

  if (!(email && pass)) return res.status(400).end();

  const [cookieData, err] = await signInService(email, pass);

  res.cookie('jwt', cookieData.token);
  res.cookie('user', cookieData.user);

  if (cookieData.token) res.status(200).end();
  else res.status(400).end();
};

module.exports = { signUpController, signInController };
