const express = require('express');
const { authEmailController } = require('../controllers/auth');

const router = express.Router();

router.get('/email/:email', authEmailController);

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
    res.status(400).end();
  }
});

module.exports = router;
