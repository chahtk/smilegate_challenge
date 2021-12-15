const express = require('express');

const router = express.Router();
const authRouter = require('./auth');

/* GET home page. */
router.get('/', (req, res) => {
  res.json({ id: 333, email: 'hello@saga' });
});

router.use('/auth', authRouter);

module.exports = router;
