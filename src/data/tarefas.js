const { v4: uuidv4 } = require('uuid');

let tarefas = [
    { id: uuidv4(), titulo: "Estudar Node", concluida: false },
    { id: uuidv4(), titulo: "Fazer trabalho", concluida: false },
    { id: uuidv4(), titulo: "Ler livro", concluida: true },
    { id: uuidv4(), titulo: "Treinar academia", concluida: false },
    { id: uuidv4(), titulo: "Estudar inglês", concluida: true },
    { id: uuidv4(), titulo: "Limpar quarto", concluida: false },
    { id: uuidv4(), titulo: "Assistir aula", concluida: true },
    { id: uuidv4(), titulo: "Organizar arquivos", concluida: false },
    { id: uuidv4(), titulo: "Responder emails", concluida: true },
    { id: uuidv4(), titulo: "Revisar conteúdo", concluida: false }
];

module.exports = tarefas;