const express = require('express');
const router = express.Router();

router.post('/addMenu', (req, res, next) => {
  var sql = "select * from board";
  conn.query(sql, function (err, result) {
    if (err) console.log("query is not excuted: " + err);
    else res.send(result);
  });
});