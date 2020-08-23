const express = require('express')
const path = require('path')
var enforce = require('express-sslify')
const PORT = process.env.PORT || 5000

express()
.use(enforce.HTTPS())
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

