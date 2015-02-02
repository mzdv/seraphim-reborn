/**
 * Created by Milos on 31.1.2015..
 */
var supertest = require("supertest");

describe("Routes", function() {

    var url = "http://localhost:3000";

    describe("GET /", function() {
        it("Should return 200 for homepage", function(done) {

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
        it("Should return 200 for successful insertion of http telemetry", function(done) {

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
        it("Should return 200 for successful insertion of network telemetry", function(done) {
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
        it("Should return 200 for successful insertion of system telemetry", function(done) {
            var systemTelemetry = {
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