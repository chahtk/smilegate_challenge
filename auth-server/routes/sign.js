const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
  const { email, pass, useName } = req.body;
  // data into mysql
});

module.exports = router;
