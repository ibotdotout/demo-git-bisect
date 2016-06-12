var express = require('express')
var app = express()

var hello = (req, res) => {
  res.send('hello')
}

app.get('/', hello)

app.get('/hi', function (req, res) {
  res.send('hi')
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

module.exports = app
