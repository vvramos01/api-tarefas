## API REST de Tarefas com Node.js e SQLite
## Descrição

Esta aplicação é uma API REST desenvolvida com Node.js e SQLite para gerenciamento de tarefas com autenticação de usuários.

O sistema permite que usuários se registrem, façam login e gerenciem suas próprias tarefas de forma segura, utilizando autenticação baseada em token (JWT).

O projeto foi estruturado seguindo boas práticas de organização em camadas, separando responsabilidades entre rotas, controllers, middlewares e banco de dados.

## Tecnologias Utilizadas
Node.js
Express (v5)
SQLite3
JSON Web Token (JWT)
BcryptJS
UUID (identificação de registros)
Jest (testes automatizados)

## Funcionalidades
## Autenticação
Registro de usuários
Login com validação de credenciais
Geração de token JWT
Proteção de rotas com middleware

## Tarefas
Criar tarefas
Listar tarefas do usuário autenticado
Atualizar tarefas
Deletar tarefas
Associação entre usuário e tarefas

## Recursos adicionais
Validação de dados de entrada
Tratamento de erros
Uso correto de status HTTP
Persistência com SQLite
Estrutura modular e organizada

## Estrutura do Projeto
src/
 ├── controllers/
 │    ├── authController.js
 │    └── task.controller.js
 │
 ├── database/
 │    └── db.js
 │
 ├── middleware/
 │    ├── auth.js
 │    └── auth.middleware.js
 │
 ├── routes/
 │    ├── auth.routes.js
 │    ├── task.routes.js
 │    └── tarefas.routes.js
 │
 ├── data/
 │    └── tarefas.js
 │
 ├── app.js
 └── server.js

tests/
## Instalação e Execução
## 1. Clonar o repositório
git clone https://github.com/vvramos01/api-tarefas.git
cd api-tarefas
## 2. Instalar dependências
npm install
## 3. Executar o projeto
npm start

A API estará disponível em:

http://localhost:3000
## Autenticação

A API utiliza JWT para proteger rotas.

Após o login, utilize o token no header:

Authorization: Bearer <seu_token>
## Rotas da API
## Autenticação
## Registrar usuário
POST /auth/register
{
  "name": "Usuario",
  "email": "usuario@email.com",
  "password": "123456"
}
## Login
POST /auth/login
{
  "email": "usuario@email.com",
  "password": "123456"
}
## Tarefas

##  Todas as rotas abaixo exigem autenticação

## Listar tarefas
GET /tasks
Criar tarefa
POST /tasks
{
  "title": "Estudar API"
}
## Atualizar tarefa
PUT /tasks/:id
{
  "title": "Atualizar tarefa",
  "completed": true
}
## Deletar tarefa
DELETE /tasks/:id

## Banco de Dados
Utiliza SQLite para persistência local
Tabela de usuários (users)
Tabela de tarefas (tasks)
Relacionamento: 1 usuário → N tarefas

## Testes
Para rodar os testes:
npm test

## Postman
O projeto contém collections do Postman para facilitar os testes das rotas:
API FINAL.postman_collection.json
api-tarefas.postman_collection.json

## Deploy
A aplicação pode ser publicada em serviços como:
Render
Railway

## Melhorias Futuras
Paginação e filtros nas tarefas
Refresh token
Validação com bibliotecas (ex: Joi ou Zod)
Documentação com Swagger
Dockerização

## Considerações
Este projeto demonstra na prática:

Autenticação com JWT
CRUD completo
Organização backend profissional
Integração com banco relacional leve
Boas práticas em APIs REST
