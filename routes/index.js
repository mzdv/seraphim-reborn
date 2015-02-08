var express = require('express');
var router = express.Router();

// GET / gives the dashboard

router.get('/', function(req, res) {
    res.render("index", {
        title: "seraphim-reborn"
    });
});

module.exports = router;
