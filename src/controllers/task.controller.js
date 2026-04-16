const db = require("../database/db");

exports.create = (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: "Título obrigatório" });
  }

  db.run(
    "INSERT INTO tasks (title, user_id) VALUES (?, ?)",
    [title, req.userId],
    function (err) {
      res.status(201).json({ id: this.lastID });
    }
  );
};

exports.getAll = (req, res) => {
  const { page = 1, limit = 5, completed, order = "id" } = req.query;

  let query = "SELECT * FROM tasks WHERE user_id = ?";
  let params = [req.userId];

  if (completed !== undefined) {
    query += " AND completed = ?";
    params.push(completed);
  }

  query += ` ORDER BY ${order} LIMIT ? OFFSET ?`;
  params.push(limit, (page - 1) * limit);

  db.all(query, params, (err, rows) => {
    res.json(rows);
  });
};

exports.update = (req, res) => {
  const { title, completed } = req.body;

  db.run(
    "UPDATE tasks SET title=?, completed=? WHERE id=? AND user_id=?",
    [title, completed, req.params.id, req.userId],
    function () {
      res.json({ updated: this.changes });
    }
  );
};

exports.delete = (req, res) => {
  db.run(
    "DELETE FROM tasks WHERE id=? AND user_id=?",
    [req.params.id, req.userId],
    function () {
      res.json({ deleted: this.changes });
    }
  );
};