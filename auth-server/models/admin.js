const { useQuery } = require('../config/mysql');
const { getAllUserNameQuery } = require('./queries.json');

const getAllUserName = async () => {
  try {
    const users = await useQuery(getAllUserNameQuery);
    return users;
  } catch (err) {
    return false;
  }
};

module.exports = getAllUserName;
