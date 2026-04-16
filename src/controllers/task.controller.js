const db = require("../database/db");

// CRIAR TAREFA
exports.create = (req, res) => {
  const { title, status } = req.body;
  
  // Validação básica
  if (!title) {
    return res.status(400).json({ error: "Título é obrigatório" });
  }

  // IMPORTANTE: req.userId vem do seu middleware de autenticação (auth.middleware.js)
  const userId = req.userId; 

  db.run(
    "INSERT INTO tasks (title, status, user_id) VALUES (?, ?, ?)",
    [title, status || "pendente", userId],
    function (err) {
      if (err) {
        console.error("Erro no INSERT:", err.message);
        return res.status(500).json({ error: "Erro ao salvar tarefa. Verifique se a tabela tem a coluna user_id." });
      }

      res.status(201).json({
        id: this.lastID,
        title,
        status: status || "pendente",
        user_id: userId
      });
    }
  );
};

// LISTAR TODAS AS TAREFAS
exports.getAll = (req, res) => {
  db.all("SELECT * FROM tasks", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
};

// ATUALIZAR TAREFA
exports.update = (req, res) => {
  const { id } = req.params;
  const { title, status } = req.body;

  db.run(
    "UPDATE tasks SET title = ?, status = ? WHERE id = ?",
    [title, status, id],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      if (this.changes === 0) return res.status(404).json({ error: "Tarefa não encontrada" });

      res.json({ message: "Atualizado com sucesso" });
    }
  );
};

// DELETAR TAREFA
exports.remove = (req, res) => {
  const { id } = req.params;

  db.run("DELETE FROM tasks WHERE id = ?", [id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0) return res.status(404).json({ error: "Tarefa não encontrada" });

    res.json({ message: "Deletado com sucesso" });
  });
};