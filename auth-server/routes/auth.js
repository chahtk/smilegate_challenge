const express = require('express');

const router = express.Router();

router.get('/email/:email', (req, res) => {
  res.status(200).end();
});

module.exports = router;
