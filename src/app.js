const express = require('express');
const app = express();

app.use(express.json());

const tarefasRoutes = require('./routes/tarefas.routes');

app.use('/tarefas', tarefasRoutes);

// tratamento de erro
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        erro: err.message || "Erro interno"
    });
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});