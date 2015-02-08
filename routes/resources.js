var mongoose = require("mongoose");
var httpModel = require("../models/http");
var netModel = require("../models/net");
var systemModel = require("../models/system");

var express = require('express');
var router = express.Router();

var redis = require("redis");
clientBackend = redis.createClient();

mongoose.connect("mongodb://localhost:27017/seraphim-reborn", function(err) {
    if(err)
        console.log(err);
});

// POST / used for auth
router.post('/', function(req, res) {

});

// POST /http used for http data (requests incoming etc etc)
router.post('/http', function(req, res) {

    var data = new httpModel({
        request: req.body.request,
        from: req.body.from,
        to: req.body.to,
        headers: req.body.headers,
        content: req.body.content
    });


    clientBackend.publish("http", JSON.stringify(data));

    data.save(function(err) {
            if(err) {
                res.status(500).end();
            }
            res.status(200).end();
    });
});

// POST /net used for NAT data (Tx, Rx, in, out...)
router.post('/net', function(req, res) {
    var data = new netModel({
        networkInterface: req.body.networkInterface,
        transport: req.body.transport
    });

    clientBackend.publish("net", JSON.stringify(data));

        data.save(function(err) {
            if(err) {
                res.status(500).end();
            }
            res.status(200).end();
        })
});

// POST /system used for system data (CPU, memory...)
router.post('/system', function(req, res) {
    var data = new systemModel({
        flag: req.body.flag,
        data: req.body.data
    });

    clientBackend.publish("system", JSON.stringify(data));

        data.save(function(err) {
            if(err) {
                res.status(500).end();
            }
            res.status(200).end();
        });

});

module.exports = router;
