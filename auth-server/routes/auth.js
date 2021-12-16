const express = require('express');
const codeGenerator = require('../utils/codeGenerator');
const sendMail = require('../utils/sendMail');

const router = express.Router();

router.get('/email/:email', async (req, res) => {
  const code = codeGenerator();
  try {
    await sendMail(req.params.email, code);
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
