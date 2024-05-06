const express = require('express');
const router = express.Router();
const conn = require("../../config/db")

router.get('/listMenu', (req, res, next) => {
  var sql = "SELECT * FROM MENU";
  conn.query(sql, function (err, result) {
    if (err) console.log("query is not excuted: " + err);
    else res.send(result);
  });
});

module.exports = router;