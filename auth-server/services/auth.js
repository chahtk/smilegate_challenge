const codeGenerator = require('../utils/codeGenerator');
const sendMail = require('../utils/sendMail');
const {
  setEmailAndCode2Redis,
  getCodeUsingEmailRedis,
} = require('../models/auth');

const authEmailService = async (email) => {
  const code = codeGenerator();
  try {
    await sendMail(email, code);
    return await setEmailAndCode2Redis(email, code);
  } catch (err) {
    return [false, err];
  }
};

const authCodeService = async (email, code) => {
  const [storedCode, err] = await getCodeUsingEmailRedis(email);
  if (code === storedCode) return [true, null];
  return [false, err];
};

module.exports = { authEmailService, authCodeService };
