const { authEmailService } = require('../services/auth');

const authEmailController = async (req, res) => {
  const { email } = req.params;

  if (!email) res.status(400).end();

  const [success, err] = await authEmailService(email);

  if (success) res.status(204).end();
  else res.status(400).end();
};

module.exports = { authEmailController };
