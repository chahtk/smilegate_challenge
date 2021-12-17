const { authEmailService, authCodeService } = require('../services/auth');

const authEmailController = async (req, res) => {
  const { email } = req.params;

  if (!email) return res.status(400).end();

  const [success, err] = await authEmailService(email);

  if (success) res.status(204).end();
  else res.status(400).end();
};

const authCodeController = async (req, res) => {
  const { email, code } = req.query;

  if (!(email && code)) return res.status(400).end();

  const [correct, err] = await authCodeService(email, code);

  if (correct) res.status(204).end();
  else res.status(400).end();
};

module.exports = { authEmailController, authCodeController };
