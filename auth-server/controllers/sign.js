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

  const [correct, err] = await signInService(email, pass);

  if (correct) res.status(200).json('sign in ok');
  else res.status(400).end();
};

module.exports = { signUpController, signInController };
