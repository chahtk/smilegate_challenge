const express = require('express');
const mysql = require('../config/mysql');

const router = express.Router();

router.post('/', (req, res) => {
  const { email, pass, userName } = req.body;
  // data into mysql
  const sql = 'insert into User(email, password, name, admin) values(?,?,?,?)';
  try {
    mysql.getConnection((connectionErr, conn) => {
      if (connectionErr) {
        if (conn) conn.release();
        throw connectionErr;
      }
      conn.query(sql, [email, pass, userName, 0], (queryErr) => {
        if (queryErr) {
          throw queryErr;
        }
        res.status(201).end();
        conn.release();
      });
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
