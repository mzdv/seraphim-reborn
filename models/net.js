/**
 * Created by Milos on 31.1.2015..
 */
var mongoose = require("mongoose");

var netModel = mongoose.model("net", {
    networkInterface: String,
    time: String,
    transport: String,
    created: {
        type: Date,
        default: Date.now
    }
}, "net");

module.exports = netModel;