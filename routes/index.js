var express = require('express');
var router = express.Router();

// GET / gives the dashboard

router.get('/', function(req, res) {
    res.render("index", {
        title: "seraphim-reborn",
        date: Date()        // this will be supplemented by socket.io
    });
});

module.exports = router;
