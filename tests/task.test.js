const request = require("supertest");
const app = require("../src/app");

describe("API Teste", () => {
  it("deve registrar usuário", async () => {
    const res = await request(app).post("/auth/register").send({
      name: "Teste",
      email: "teste@email.com",
      password: "123456",
    });

    expect(res.statusCode).toBe(201);
  });
});