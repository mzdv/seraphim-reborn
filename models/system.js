/**
 * Created by Milos on 31.1.2015..
 */
var mongoose = require("mongoose");

var systemModel = mongoose.model("system", {
    flag: String,
    time: String,
    data: String,
    created: {
        type: Date,
        default: Date.now
    }
}, "system");

module.exports = systemModel;