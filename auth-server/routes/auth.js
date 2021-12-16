const express = require('express');
const codeGenerator = require('../utils/codeGenerator');
const sendMail = require('../utils/sendMail');
const redis = require('../config/redis');

const router = express.Router();

router.get('/email/:email', async (req, res) => {
  const { email } = req.params;
  const code = codeGenerator();
  try {
    await sendMail(email, code);
    await redis.set(email, code);
    res.status(200).json({
      status: 'sueccess',
      code: 200,
      message: 'refactoring...',
    });
  } catch (e) {
    console.log(`Error: ${e}`);
    res.status(400).end();
  }
});

module.exports = router;
