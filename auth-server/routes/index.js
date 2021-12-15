const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  res.json({ id: 333, email: 'hello@saga' });
});

module.exports = router;
