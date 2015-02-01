/**
 * Created by Milos on 31.1.2015..
 */
var mongoose = require("mongoose");

var httpModel = mongoose.model("http", {
    request: String,
    from: String,
    to: String,
    headers: String,
    content: String,
    created: {
        type: Date,
        default: Date.now
    }
}, "http");

module.exports = httpModel;