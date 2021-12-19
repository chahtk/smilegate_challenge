const crypto = require('crypto');

const encrypt = (pass, salt) =>
  // pass: plain, salt: string | undefined
  new Promise((resolve, reject) => {
    const saltingNumber = 64; // 반복 횟수
    let result = '';
    let newSalt = '';

    if (salt) newSalt = salt;
    else newSalt = crypto.randomBytes(64).toString('base64');

    crypto.scrypt(pass, newSalt, saltingNumber, (err, key) => {
      if (err) return reject(err);
      result = key.toString('base64');
      return resolve({ pwd: result, salt: newSalt });
    });
  });

module.exports = encrypt;
