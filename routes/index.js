const express = require('express')
const router = express.Router()

const adminController = require('./controller/admin')
const orderController = require('./controller/order')
const menuController = require('./controller/menu')
const testController = require('./controller/test')

router.use('/admin', adminController)
router.use('/order', orderController)
router.use('/menu', menuController)
router.use('/test', testController)

module.exports = router