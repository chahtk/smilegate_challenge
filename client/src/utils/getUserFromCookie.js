const getUserFromCookie = () => {
  const { cookie } = document;
  const arr = cookie.split(';');

  return arr
    .map((el) => {
      const [key, val] = el.trim().split('=');
      if (key === 'user') return val;
    })
    .filter((el) => el)[0];
};

export default getUserFromCookie;
