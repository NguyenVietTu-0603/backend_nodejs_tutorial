require('dotenv').config()

const express = require('express')
const path = require('path')
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')

const app = express()
const port = process.env.PORT || 8888

configViewEngine(app)
app.use('/', webRoutes)


app.listen(port, process.env.HOST_NAME, () => {
  console.log(`Example app listening on port ${port}`)
})
