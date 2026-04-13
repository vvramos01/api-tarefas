# API REST de Tarefas

API desenvolvida em Node.js com Express.

## Funcionalidades
- CRUD completo (GET, POST, PUT, DELETE)
- Validação de dados
- Tratamento de erros

## Como executar

npm install  
node src/app.js  

## Endpoints

GET /tarefas  
GET /tarefas/:id  
POST /tarefas  
PUT /tarefas/:id  
DELETE /tarefas/:id  

## Exemplo de requisição

POST /tarefas

{
  "titulo": "Nova tarefa",
  "concluida": false
}
