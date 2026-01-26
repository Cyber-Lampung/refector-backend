const request = require("supertest");
const app = require("../src/app");

describe("Register Check User", () => {
  it("register check created account", async () => {
    const res = await request(app).post("/api/register").send({
      email: "userlocal@gmail.com",
      username: "usernameTest",
      password: "12345678",
    });

    expect(res.statusCode).toBe(201);
    expect(res.body.message).toBe("succes create account");
  });
});
