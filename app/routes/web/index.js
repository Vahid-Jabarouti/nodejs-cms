const express = require('express')
const router = express.Router()

//Admin Router
const adminRouter = require('./admin')
router.use('/admin', adminRouter)

//Home Router
const HomeRouter = require('./home')
router.use('/', HomeRouter)

module.exports = router

