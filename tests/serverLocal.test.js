const request = require("supertest");
const app = require("../src/app");

describe("check health server", () => {
  it("server is return 200 oke", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Server Is Runing");
  });
});
