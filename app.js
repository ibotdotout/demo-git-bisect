var path = require('path')
var hello = require(path.resolve('app/controller/hello'))
var express = require('express')
var app = express()

var hi = (req, res) => {
  res.send('hi')
}

app.get('/', hello)

app.get('/hi', hi)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

module.exports = app
