const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  res.json({ id: 3, email: 'hello@world' });
});

module.exports = router;
