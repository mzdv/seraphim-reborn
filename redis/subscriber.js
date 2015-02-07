/**
 * Created by Milos on 8.2.2015..
 */
var redis = require("redis");
subscriber = redis.createClient();

subscriber.subscribe("http");
subscriber.subscribe("net");
subscriber.subscribe("system");

module.exports = subscriber;