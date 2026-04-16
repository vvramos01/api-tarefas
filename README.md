# API REST de Tarefas com Node.js e SQLite

## Descrição

Este projeto consiste no desenvolvimento de uma API REST completa utilizando Node.js, com integração a banco de dados SQLite. A aplicação permite o gerenciamento de tarefas associadas a usuários autenticados, implementando operações CRUD, autenticação via JWT, filtros, ordenação, paginação e relacionamentos entre entidades.

O objetivo do projeto é aplicar conceitos fundamentais de desenvolvimento backend, incluindo boas práticas de organização de código, tratamento de erros, uso adequado de status HTTP e persistência de dados.

---

## Tecnologias Utilizadas

* Node.js
* Express
* SQLite3
* JSON Web Token (JWT)
* BcryptJS
* Jest (testes automatizados)

---

## Funcionalidades

* Cadastro e autenticação de usuários
* Geração de token JWT para acesso às rotas protegidas
* CRUD completo de tarefas
* Associação de tarefas a usuários (relacionamento)
* Filtros por status de conclusão
* Ordenação de resultados
* Paginação de dados
* Validações de entrada
* Retorno de status HTTP apropriados
* Testes automatizados básicos

---

## Estrutura do Projeto

```
src/
 ├── controllers/
 ├── database/
 ├── middleware/
 ├── routes/
 ├── app.js
 └── server.js

tests/
```

---

## Instalação e Execução

### 1. Clonar o repositório

```bash
git clone https://github.com/vvramos01/api-tarefas.git
cd api-tarefas
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Executar a aplicação

```bash
npm start
```

A aplicação estará disponível em:

```
http://localhost:3000
```

---

## Autenticação

A API utiliza autenticação baseada em JWT. Após o login, um token é gerado e deve ser enviado no header das requisições protegidas.

### Header necessário:

```
Authorization: <token>
```

---

## Rotas da API

### Autenticação

#### Registro de usuário

POST /auth/register

```json
{
  "name": "Usuario",
  "email": "usuario@unifil.br",
  "password": "123456"
}
```

#### Login

POST /auth/login

```json
{
  "email": "usuario@unifil.br",
  "password": "123456"
}
```

---

### Tarefas

#### Listar tarefas

GET /tasks

Parâmetros de query:

* page: número da página
* limit: quantidade de registros por página
* completed: filtrar por status (0 ou 1)
* order: campo para ordenação

Exemplo:

```
GET /tasks?page=1&limit=5&completed=0&order=id
```

---

#### Criar tarefa

POST /tasks

```json
{
  "title": "Estudar API"
}
```

---

#### Atualizar tarefa

PUT /tasks/:id

```json
{
  "title": "Atualizar tarefa",
  "completed": 1
}
```

---

#### Deletar tarefa

DELETE /tasks/:id

---

## Relacionamentos

A aplicação implementa relacionamento entre usuários e tarefas. Cada tarefa está associada a um usuário, e as consultas utilizam JOIN para retornar informações combinadas, como nome e e-mail do usuário responsável.

---

## Testes Automatizados

Para executar os testes:

```bash
npm test
```

---

## Deploy

A aplicação pode ser executada em ambiente de produção utilizando plataformas como Render ou Railway.

Exemplo de deploy:

```
https://api-tarefas.onrender.com
```

---

## Collection do Postman

A collection com exemplos de requisições está disponível no repositório, permitindo testar todas as rotas da API.

---

## Considerações Finais

Este projeto demonstra a implementação completa de uma API REST com autenticação, persistência de dados, organização em camadas e boas práticas de desenvolvimento backend, atendendo aos requisitos propostos para o trabalho final.
