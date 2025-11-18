const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Hello World!')
})
router.get('/test', (req, res) => {
  // res.send('<h1>Test Page</h1><p>This is a test page.</p>')
  res.render('sample')
})

module.exports = router