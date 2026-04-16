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
      if (err) {
        return res.status(500).json({ error: "Erro ao criar tarefa" });
      }

      return res.status(201).json({ id: this.lastID });
    }
  );
};

exports.getAll = (req, res) => {
  const { page = 1, limit = 5, completed, order = "tasks.id" } = req.query;

  let query = `
    SELECT tasks.*, users.name as user_name, users.email
    FROM tasks
    JOIN users ON tasks.user_id = users.id
    WHERE tasks.user_id = ?
  `;

  let params = [req.userId];

  if (completed !== undefined) {
    query += " AND tasks.completed = ?";
    params.push(completed);
  }

  query += ` ORDER BY ${order} LIMIT ? OFFSET ?`;
  params.push(limit, (page - 1) * limit);

  db.all(query, params, (err, rows) => {
    if (err) {
      return res.status(500).json({ error: "Erro ao buscar tarefas" });
    }

    return res.status(200).json(rows);
  });
};

exports.update = (req, res) => {
  const { title, completed } = req.body;

  if (title === undefined && completed === undefined) {
    return res.status(400).json({ error: "Nada para atualizar" });
  }

  db.run(
    "UPDATE tasks SET title = COALESCE(?, title), completed = COALESCE(?, completed) WHERE id=? AND user_id=?",
    [title, completed, req.params.id, req.userId],
    function (err) {
      if (err) {
        return res.status(500).json({ error: "Erro ao atualizar" });
      }

      if (this.changes === 0) {
        return res.status(404).json({ error: "Tarefa não encontrada" });
      }

      return res.status(200).json({ updated: this.changes });
    }
  );
};

exports.delete = (req, res) => {
  db.run(
    "DELETE FROM tasks WHERE id=? AND user_id=?",
    [req.params.id, req.userId],
    function (err) {
      if (err) {
        return res.status(500).json({ error: "Erro ao deletar" });
      }

      if (this.changes === 0) {
        return res.status(404).json({ error: "Tarefa não encontrada" });
      }

      return res.status(200).json({ deleted: this.changes });
    }
  );
};