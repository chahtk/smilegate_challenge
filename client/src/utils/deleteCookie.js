const deleteCookie = (name) => {
  const date = new Date();
  date.setDate(date.getDate() - 100);
  document.cookie = `${name}=;Expireds=${date.toUTCString()}`;
};

export default deleteCookie;
