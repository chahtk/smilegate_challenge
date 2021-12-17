const express = require('express');
const { signUpController } = require('../controllers/sign');

const router = express.Router();

router.post('/up', signUpController);

module.exports = router;
