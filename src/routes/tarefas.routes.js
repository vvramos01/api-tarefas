const express = require('express');
const router = express.Router();
const tarefas = require('../data/tarefas');
const { v4: uuidv4 } = require('uuid');

// GET todas
router.get('/', (req, res) => {
    res.status(200).json(tarefas);
});

// GET por ID
router.get('/:id', (req, res) => {
    const tarefa = tarefas.find(t => t.id === req.params.id);

    if (!tarefa) {
        return res.status(404).json({ erro: "Tarefa não encontrada" });
    }

    res.json(tarefa);
});

// POST
router.post('/', (req, res) => {
    const { titulo, concluida } = req.body;

    if (!titulo || typeof titulo !== 'string') {
        return res.status(400).json({ erro: "Título inválido" });
    }

    const nova = {
        id: uuidv4(),
        titulo,
        concluida: concluida ?? false
    };

    tarefas.push(nova);

    res.status(201).json(nova);
});

// PUT
router.put('/:id', (req, res) => {
    const tarefa = tarefas.find(t => t.id === req.params.id);

    if (!tarefa) {
        return res.status(404).json({ erro: "Tarefa não encontrada" });
    }

    const { titulo, concluida } = req.body;

    if (!titulo) {
        return res.status(400).json({ erro: "Título é obrigatório" });
    }

    tarefa.titulo = titulo;
    tarefa.concluida = concluida;

    res.json(tarefa);
});

// DELETE
router.delete('/:id', (req, res) => {
    const index = tarefas.findIndex(t => t.id === req.params.id);

    if (index === -1) {
        return res.status(404).json({ erro: "Tarefa não encontrada" });
    }

    tarefas.splice(index, 1);

    res.status(204).send();
});

module.exports = router;