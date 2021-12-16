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
    res.status(204).json({
      status: 'sueccess',
      code: 204,
      message: 'refactoring...',
    });
  } catch (e) {
    console.log(`Error: ${e}`);
    res.status(400).end();
  }
});

router.get('/', async (req, res) => {
  const { email, code } = req.query;
  try {
    const storedCode = await redis.get(email);
    if (code === storedCode) {
      res.status(204).end();
    } else {
      throw new Error('wrong code');
    }
  } catch (e) {
    console.log(`Error: ${e}`);
    res.status(400).end();
  }
});

module.exports = router;
