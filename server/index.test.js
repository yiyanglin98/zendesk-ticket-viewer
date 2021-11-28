const request = require("supertest");
const app = require("./app");

describe("Test get tickets", () => {
    test("It should response the GET method", done => {
        request(app)
            .get("/api/tickets")
            .then(response => {
                expect(response.statusCode).toBe(200);
                done();
            });
    });
});

describe("Test get user with exist userId", () => {
    test("It should response the GET method", done => {
        request(app)
            .get("/api/user?id=1902292561204")
            .then(response => {
                expect(response.statusCode).toBe(200);
                done();
            });
    });
});

describe("Test get user with invalid userId", () => {
    test("It should response the GET method", done => {
        request(app)
            .get("/api/user?id=123123")
            .then(response => {
                expect(response.statusCode).toBe(200);
                done();
            });
    });
});