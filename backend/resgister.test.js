const request=require("supertest");
const { app } = require("./server");


describe("POST /register", () => {
  it("should register a new user with valid input", async () => {
    const res = await request(app).post("/register").send({
      email: `test${Date.now()}@example.com`,
      password: "password123"
    });

    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("data regsiter succefully");
  });

  it("should fail if email or password is missing", async () => {
    const res = await request(app).post("/register").send({
      email: "",
      password: ""
    });

    expect(res.statusCode).toBe(400);
    expect(res.text).toBe("Email and password are required.");
  });
});
