var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json())
app.use(cors())

var port = process.env.PORT || 8080

var genRandomString = function (length) {
  return '23lk4j23kl4j2lj34kl3j'
}

app.get('/', function (request, response) {
  response.json({
    welcome: 'welcome to my API!'
  })
})

app.post('/login', async function (request, response) {
  const username = request.body.username
  const password = request.body.password

  console.log(username)
  console.log(password)

  if (username === 'admin' && password === 'admin') {
    // authenticated
    const token = genRandomString(25)

    response.status(200).json({ message: 'authenticated', token: token, expiration_date: 'some time' })
  } else {
    response.status(401).json({ message: 'not authorized' })
  }
  
})

app.listen(port, (err) => {
  if (err) {
    console.log(err)
  }

  console.log('now listening on port: ' + port)
})