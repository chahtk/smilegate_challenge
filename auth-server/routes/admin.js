const express = require('express');
const jwt = require('../utils/jwt');
const getAllUserName = require('../models/admin');

const router = express.Router();

router.get('/', async (req, res) => {
  const token = req.cookies.jwt;
  const user = await jwt.verify(token);
  if (user.admin === 1) {
    // get all user data and response it
    const users = await getAllUserName();
    res.status(200).send(users[0]);
  } else res.status(400).end();
});

module.exports = router;
