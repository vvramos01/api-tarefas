const express = require("express");
const app = express();

app.use(express.json());

const authController = require("./controllers/authController");
const taskController = require("./controllers/task.controller");
const auth = require("./middleware/auth");

// AUTH
app.post("/register", authController.register);
app.post("/login", authController.login);

// PROTEGIDA
app.get("/protegida", auth, (req, res) => {
  res.json({ message: "ok", userId: req.userId });
});

// TASKS (TODAS PROTEGIDAS)
app.post("/tasks", auth, taskController.create);
app.get("/tasks", auth, taskController.getAll);
app.put("/tasks/:id", auth, taskController.update);
app.delete("/tasks/:id", auth, taskController.remove);

module.exports = app;