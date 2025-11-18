
const getHomePage = (req, res) => {
  res.send('Hello World! TUUU')
}
const getTestPage = (req, res) => {
  // res.send('<h1>Test Page</h1><p>This is a test page.</p>')
  res.render('sample')
}


module.exports = {
  getHomePage,
  getTestPage,
}