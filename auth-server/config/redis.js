const redis = require('redis');

const getRedisClient = () => redis.createClient(6397, 'localhost');

module.exports = getRedisClient();
