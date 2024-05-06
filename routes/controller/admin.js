const express = require('express');
const router = express.Router();
const conn = require("../../config/db")

router.get('/', (req, res, next) => {
  var sql = "SELECT * FROM ORDER";
  conn.query(sql, function (err, result) {
    if (err) console.log("query is not excuted: " + err);
    else res.send(result);
  });
});

router.get('/addStore', (req, res, next) => {
  var sql = "INSERT INTO STORE (storeName, storeCode) VALUES ('크라이치즈버거', 'asdf123123')";
  conn.query(sql, function (err, result) {
    if (err) console.log("query is not excuted: " + err);
    else res.send(result);
  });
});


module.exports = router;