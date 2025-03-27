# MYCONTACTS-BACKEND 🚀  
Backend API para gerenciamento de contatos com autenticação JWT e CRUD completo.  

---

## 🔧 Funcionalidades  
- **Autenticação segura**: Registro e login com JWT e senhas criptografadas (bcrypt).  
- **CRUD de contatos**: Cada usuário acessa apenas seus contatos.  
- **Tratamento de erros**: Respostas padronizadas para erros comuns (404, 403, etc.).  

---

## 🛠️ Tecnologias  
- **Backend**: Node.js + Express  
- **Banco de Dados**: MongoDB (Mongoose)  
- **Segurança**: JWT, Bcrypt  
- **Ferramentas**: Nodemon (dev), Postman (testes)  

---

## ⚙️ Como Configurar e Executar  

### Pré-requisitos  
- Node.js (v18+)  
- MongoDB (local ou Atlas)  
- Git (para versionamento)  

### Passo a Passo  

1. **Clone o repositório**  
   ```bash
   git clone https://github.com/seu-usuario/mycontacts-backend.git
   
   cd mycontacts-backend
   
2. **Instale as dependências**
   ```bash
   npm install

3. **Configure o ambiente**
   crie um arquivo .env na raíz do projeto com:
   
  PORT=5001
  CONNECTION_STRING=sua_string_mongodb
  ACCESS_TOKEN_SECRET=um_segredo_forte

4. **Inicie o servidor**
   ```bash
   npm run dev # modo desenvolvimento (nodemon)

## 📌 Rotas da API

### 👤 Usuários
| Método | Rota                   | Descrição                     |
|--------|------------------------|-------------------------------|
| POST   | `/api/users/register`  | Registra novo usuário         |
| POST   | `/api/users/login`     | Login (retorna token JWT)     |
| GET    | `/api/users/current`   | Dados do usuário logado       |

### 📒 Contatos *(requer token JWT)*
| Método | Rota                   | Descrição                     |
|--------|------------------------|-------------------------------|
| GET    | `/api/contacts`        | Lista todos os contatos       |
| POST   | `/api/contacts`        | Cria novo contato             |
| GET    | `/api/contacts/:id`    | Busca contato por ID          |
| PUT    | `/api/contacts/:id`    | Atualiza contato              |
| DELETE | `/api/contacts/:id`    | Remove contato                |


## 📂 Estrutura do Projeto
mycontacts-backend/
├── config/
│ └── dbConnection.js # Conexão com o MongoDB
├── controllers/
│ ├── contactControllers.js # Lógica dos contatos
│ └── userController.js # Lógica de usuários
├── middleware/
│ ├── errorHandler.js # Tratamento de erros
│ └── validateTokenHandler.js # Validação JWT
├── models/
│ ├── contactModel.js # Modelo de contatos
│ └── userModel.js # Modelo de usuários
├── routes/
│ ├── contactRoutes.js # Rotas de contatos
│ └── userRoutes.js # Rotas de usuários
├── .env # Variáveis de ambiente
├── .gitignore # Ignora node_modules e .env
├── package.json # Dependências
└── server.js # Ponto de entrada

## 👨‍💻 Autor

**Pedro Calil**

   
