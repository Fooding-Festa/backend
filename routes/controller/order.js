const express = require('express');
const router = express.Router();

router.post('/addMenu', (req, res, next) => {
  var sql = "select * from board";
  conn.query(sql, function (err, result) {
    if (err) console.log("query is not excuted: " + err);
    else res.send(result);
  });
});

router.get('/menu', (req, res, next) => {
  res.send("this is menu");
});

router.get('/orders', (req, res, next) => {
  res.send("this is menu");
});

module.exports = router;