const express = require('express');
const {
  authEmailController,
  authCodeController,
} = require('../controllers/auth');

const router = express.Router();

router.get('/email/:email', authEmailController);

router.get('/', authCodeController);

module.exports = router;
