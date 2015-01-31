/**
 * Created by Milos on 31.1.2015..
 */
var supertest = require("supertest");

var mongoose = require("mongoose");

describe("Routes", function() {

    var url = "http://localhost:3000";
    mongoose.connect("mongodb://localhost/seraphim-reborn");

    describe("GET /", function() {
        it("Should return status 200 for homepage", function(done) {

            supertest(url)
                .get('/')
                .expect(200)
                .end(function(err) {
                    if(err)
                        throw err;
                    done();
                });
        })
    });
    describe("POST /resources/http", function() {
        it("Should accept and gather http related telemetry", function(done) {

            var httpTelemetry = {
                resource: "http",
                request: "GET",
                from: "daffyduck.com",
                to: "dolan.fi",
                headers: "Headers",
                content: "Three decades of war"
            };

            supertest(url)
                .post("/resources/http")
                .send(httpTelemetry)
                .expect(200)
                .end(function(err) {
                    if(err)
                        throw err;

                        done();
                });
        })
    });
    describe("POST /resources/net", function() {
        it("Should accept and gather networking related telemetry", function(done) {
            var netTelemetry = {
                net: "net",
                networkInterface: "eth0",
                time: "12:00",
                transport: "incoming"
            };

            supertest(url)
                .post("/resources/net")
                .send(netTelemetry)
                .expect(200)
                .end(function(err) {
                    if(err)
                        throw err;

                    done();
                });
        })
    });
    describe("POST /resources/system", function() {
        it("Should accept and gather system related telemetry", function(done) {
            var systemTelemetry = {
                resource: "system",
                flag: "CPU",
                time: "12:00",
                data: "100%"
            };

            supertest(url)
                .post("/resources/system")
                .send(systemTelemetry)
                .expect(200)
                .end(function(err) {
                    if(err)
                        throw err;

                    done();
                });
        });
    });
});