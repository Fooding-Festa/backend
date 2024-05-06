const express = require('express');
const router = express.Router();
const conn = require("../../config/db")
const path = require("path");

router.get('/makeOrder', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/order.html'));
});

router.post('/makeOrder', (req, res) => {
  var sql = `INSERT INTO ORDERS (menuList, phone, storeName) values ("{'기본메뉴'}", "01025203709", '크라이치즈버거');`
  conn.query(sql, function (err, result) {
    if (err) console.log("query is not excuted: " + err);
    else res.send(result);
  });
});

router.get('/updateStatus', (req, res) => {
  var sql = `UPDATE ORDERS SET status=-1 where orderCode=1;`
  conn.query(sql, function (err, result) {
    if (err) console.log("query is not excuted: " + err);
    else res.send(result);
  });
});

router.get('/complete', (req, res) => {
  res.send('send SMS');
  var sql = `UPDATE ORDERS SET status=999 where orderCode=1;`
  conn.query(sql, function (err, result) {
    if (err) console.log("query is not excuted: " + err);
  });
});

module.exports = router;