const codeGenerator = () => {
  const randNumber = parseInt(Math.random() * 1000000, 10);
  return randNumber.toString().padStart(6, 0);
};

module.exports = codeGenerator;
