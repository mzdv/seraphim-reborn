/**
 * Created by Milos on 31.1.2015..
 */
var should = require("should");
var request = require("supertest");

describe("Routes", function() {
    var url = "http://localhost:3000";
    describe("GET /", function() {
        it("Should return code 200 for homepage", function() {
            request(url)
                .get("/")
                .end(function(err, res) {
                    res.should.have.status(200);
                });
        })
    });
    describe("POST /resources/http", function() {
        it("Should accept and gather http related telemetry", function() {
            var httpTelemetry = {
                request: "GET",
                from: "daffyduck.com",
                to: "dolan.fi",
                headers: "Headers",
                content: "Three decades of war"
            };

            request(url)
                .post("/resources/http")
                .send(httpTelemetry.toJSON())
                .end();

            //CouchDB HERE
        })
    });
    describe("POST /resources/http", function() {
        it("Should accept and gather http related telemetry", function() {
            var httpTelemetry = {
                request: "GET",
                from: "daffyduck.com",
                to: "dolan.fi",
                headers: "Headers",
                content: "Three decades of war"
            };

            request(url)
                .post("/resources/http")
                .send(httpTelemetry.toJSON())
                .end();

            //CouchDB HERE for http
        })
    });
    describe("POST /resources/net", function() {
        it("Should accept and gather networking related telemetry", function() {
            var httpTelemetry = {
                networkingInterface: "eth0",
                time: "12:00",
                transport: "incoming"
            };

            request(url)
                .post("/resources/net")
                .send(httpTelemetry.toJSON())
                .end();

            //CouchDB HERE for net
        })
    });
    describe("POST /resources/system", function() {
        it("Should accept and gather system related telemetry", function() {
            var httpTelemetry = {
                flag: "CPU",
                time: "12:00",
                data: "100%"
            };

            request(url)
                .post("/resources/http")
                .send(httpTelemetry.toJSON())
                .end();

            //CouchDB HERE for system
        })
    });
});