const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASS,
  },
});

const sendMail = (email, code) => {
  return transporter.sendMail({
    from: `"hjun-server" <${process.env.NODEMAILER_USER}>`,
    to: email,
    subject: 'nodemailer test',
    text: code,
  });
};

module.exports = sendMail;
