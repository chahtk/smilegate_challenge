const express = require('express');

const router = express.Router();
const authRouter = require('./auth');
const signRouter = require('./sign');
const adminRouter = require('./admin');

/* GET home page. */
router.get('/', (req, res) => {
  res.json({ id: 333, email: 'hello@saga' });
});

router.use('/auth', authRouter);
router.use('/sign', signRouter);
router.use('/admin', adminRouter);

module.exports = router;
