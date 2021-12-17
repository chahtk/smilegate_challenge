const jwtOption = {
  secretKey: process.env.JWT_SECRET,
  option: {
    algorithm: process.env.JWT_ALGORITHM,
    issuer: process.env.JWT_ISSUER,
    expiresIn: process.env.JWT_EXPIRE,
  },
};

module.exports = jwtOption;
