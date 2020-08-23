var express = require('express');
var router = express.Router();

// Home page route.
router.get('/', function (req, res) {
  res.send('Hello World. Learn <a href="/about">about this app</a>');
})

// About page route.
router.get('/about', function (req, res) {
  res.send('About this COVID-19 Tracker. Go <a href="/">home</a>');
})

module.exports = router;