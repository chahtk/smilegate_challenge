const express = require('express');
const { signUpController, signInController } = require('../controllers/sign');

const router = express.Router();

router.post('/up', signUpController);
router.post('/in', signInController);

module.exports = router;
