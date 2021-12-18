const crypto = require('crypto');

const encrypt = (pass) =>
  crypto.createHash('sha512').update(pass).digest('base64');

module.exports = encrypt;
