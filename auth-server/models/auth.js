const redis = require('../config/redis');

const setEmailAndCode2Redis = async (email, code) => {
  try {
    await redis.set(email, code);
  } catch (err) {
    return [false, err];
  }
  return [true, null];
};

module.exports = { setEmailAndCode2Redis };
