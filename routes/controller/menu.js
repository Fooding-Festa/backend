const express = require('express');
const router = express.Router();
const conn = require("../../config/db")

router.get('/listMenu/:store', (req, res, next) => {
  var store = req.params.store
  var sql = "SELECT * FROM MENU WHERE storeName = ?";
  conn.query(sql, store, function (err, result) {
    if (err) console.log("query is not excuted: " + err);
    else res.send(result);
  });
});

router.post('/addMenu', (req, res, next) => {
  var store = req.params.store
  var sql = "SELECT * FROM MENU WHERE storeName = ?";
  conn.query(sql, store, function (err, result) {
    if (err) console.log("query is not excuted: " + err);
    else res.send(result);
  });
});

module.exports = router;