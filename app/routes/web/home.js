const express = require('express')
const router = express.Router()

//controller
const homeController = require("app/http/controllers/homeController");

//home routes
router.get('/', homeController.index.bind(homeController))

module.exports = router;

