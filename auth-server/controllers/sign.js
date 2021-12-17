const { signUpService, signInService } = require('../services/sign');

const signUpController = (req, res) => {
  const { email, pass, userName } = req.body;

  if (!(email && pass && userName)) return res.status(400).end();

  const [success, err] = signUpService(email, pass, userName);

  if (success) res.status(201).end();
  else res.status(400).end();
};

const signInController = (req, res) => {
  const { email, pass } = req.body;

  if (!(email && pass)) return res.status(400).end();

  const [success, err] = signInService(email, pass);

  if (success) res.status(200).end();
  else res.status(400).end();
};

module.exports = { signUpController, signInController };
