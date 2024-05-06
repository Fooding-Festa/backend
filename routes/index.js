const express = require('express')
const router = express.Router()

const adminController = require('./controller/admin')
const orderController = require('./controller/order')
const menuController = require('./controller/menu')

router.use('/admin', adminController)
router.use('/order', orderController)
router.use('/menu', menuController)

module.exports = router