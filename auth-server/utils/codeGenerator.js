const codeGenerator = () => {
  const randNumber = Math.random() * 1000000;
  return randNumber.toString().padStart(6, 0);
};

export default codeGenerator;
