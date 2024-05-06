const express = require('express');
const router = express.Router();
const conn = require("../../config/db")

router.get('/', (req, res, next) => {
  var sql1 = "INSERT INTO STORE (storeName, storeCode) values('크라이치즈버거', 'abc-100');"
  var sql2 = "INSERT INTO MENU (menuName, menuPrice, menuImg, storeName) values ('더블치즈버거', '7000', '', '크라이치즈버거');"
  var sql3 = "INSERT INTO MENU (menuName, menuPrice, menuImg, storeName) values ('감자튀김', '3000', '', '크라이치즈버거');"
  var sql4 = `INSERT INTO ORDERS (menuList, phone, storeName) values ("{'더블치즈버거', '감자튀김'}", "01062373709", '크라이치즈버거');`
  var sql = sql1+sql2+sql3+sql4
  conn.query(sql, function (err, result) {
    if (err) console.log("query is not excuted: " + err);
    else res.send(result);
  });
});



module.exports = router;