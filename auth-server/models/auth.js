const redis = require('../config/redis');

const setEmailAndCode2Redis = async (email, code) => {
  const expireSecond = 60 * 5;
  try {
    await redis.set(email, code);
    redis.expire(email, expireSecond);
  } catch (err) {
    return [false, err];
  }
  return [true, null];
};

const getCodeUsingEmailRedis = async (email) => {
  try {
    const storedCode = await redis.get(email);
    return [storedCode, null];
  } catch (err) {
    return [false, err];
  }
};

module.exports = { setEmailAndCode2Redis, getCodeUsingEmailRedis };
