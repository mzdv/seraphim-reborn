var express = require('express');
var router = express.Router();

// POST / used for auth
router.post('/', function(req, res) {
    res.send("This should be used for auth");
});

// POST /http used for http data (requests incoming etc etc)
router.post('/http', function(req, res) {
  res.send("Used for HTTP data");
});

// POST /net used for NAT data (Tx, Rx, in, out...)
router.post('/net', function(req, res) {
    res.send("Used for NAT data");
});

// POST /system used for system data (CPU, memory...)
router.post('/system', function(req, res) {
    res.send("Used for system data");
});

module.exports = router;
