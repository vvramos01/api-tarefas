const express = require("express");
const app = express();

app.use(express.json());

app.use("/auth", require("./routes/auth.routes"));
app.use("/tasks", require("./routes/task.routes"));

module.exports = app;