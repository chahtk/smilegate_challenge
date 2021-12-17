const { signUpService } = require('../services/sign');

const signUpController = (req, res) => {
  const { email, pass, userName } = req.body;
  console.log(req.body);
  if (!(email && pass && userName)) res.status(400).end();

  const [success, err] = signUpService(email, pass, userName);
  if (success) res.status(201).end();
  else {
    res.status(400).end();
  }
};

module.exports = { signUpController };
