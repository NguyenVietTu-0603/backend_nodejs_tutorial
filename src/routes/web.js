const express = require('express')
const router = express.Router()
const { getHomePage, getTestPage } = require('../controller/homeController')

router.get('/', getHomePage)
router.get('/test',getTestPage)

module.exports = router