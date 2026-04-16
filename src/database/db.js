const sqlite3 = require("sqlite3").verbose();

// cria/conecta no banco na raiz do projeto
const db = new sqlite3.Database("./database.sqlite", (err) => {
  if (err) {
    console.error("Erro ao conectar ao banco:", err.message);
  } else {
    console.log("Conectado ao SQLite");
  }
});

// CRIAR TABELA USERS
db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE,
    password TEXT
  )
`);

// CRIAR TABELA TASKS
db.run(`
  CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    status TEXT DEFAULT 'pendente',
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users(id)
  )
`);

module.exports = db;