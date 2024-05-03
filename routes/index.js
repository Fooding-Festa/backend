const express = require('express')
const router = express.Router()

const ownerController = require('./controller/owner')
const guestController = require('./controller/guest')

router.use('/owner', ownerController)
router.use('/guest', guestController)

module.exports = router