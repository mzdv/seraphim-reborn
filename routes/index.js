var express = require('express');
var router = express.Router();

// GET / gives the dashboard

router.get('/', function(req, res) {
  res.render('index', { title: 'Dashboard' });
});

module.exports = router;
