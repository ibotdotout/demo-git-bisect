var path = require('path')
var hello = require(path.resolve('app/controller/hello'))
var hi = require(path.resolve('app/controller/hi'))
var express = require('express')
var app = express()

app.get('/', hello)

app.get('/hi', hi)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

module.exports = app
