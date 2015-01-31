/**
 * Created by Milos on 31.1.2015..
 */
var mongoose = require("mongoose");

var systemModel = mongoose.model("system", {
    resource: String,
    flag: String,
    time: String,
    data: String
}, "system");

module.exports = systemModel;