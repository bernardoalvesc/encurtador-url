# 🔗 Encurtador de URLs

Projeto completo de encurtador de URLs, com backend em Node.js + TypeScript, frontend em HTML + TailwindCSS, e persistência em MongoDB. A aplicação possui logging estruturado, estrutura de projeto modular, e está pronta para uso local via Docker ou execução direta.

---

## 📦 Tecnologias utilizadas

### Backend

- **Node.js**: ambiente de execução JavaScript no servidor
- **TypeScript**: tipagem estática para maior segurança e produtividade
- **Express.js**: framework web rápido e minimalista
- **Mongoose**: ODM para MongoDB, simplifica manipulação de dados
- **Shortid**: geração de IDs curtos e únicos para as URLs
- **Morgan**: logging HTTP em arquivo para análise posterior
- **Winston**: sistema de logs estruturado e persistente

### Frontend

- **HTML5** + **TailwindCSS** (via CDN): interface moderna, responsiva e leve

### Banco de Dados

- **MongoDB Atlas**: banco NoSQL escalável, usado para armazenar URLs originais com seus respectivos IDs curtos

---

## 🗂️ Estrutura do projeto

```
encurtador-url/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   └── services/
│   ├── dist/ (gerado após build)
│   ├── package.json
│   └── tsconfig.json
├── frontend/
│   ├── index.html
│   └── admin/ (opcional - desativado)
├── docker-compose.yml
└── README.md
```

---

## ⚙️ Como rodar localmente

### 🧪 Pré-requisitos

- [Node.js](https://nodejs.org/) v18+
- [Yarn](https://yarnpkg.com/) ou npm
- MongoDB local ou instância do Atlas

---

### ▶️ Executando via Yarn

```bash
# 1. Instale as dependências
yarn install

# 2. Compile o TypeScript
yarn build

# 3. Rode a aplicação
yarn start
```

A API estará disponível em:
📍 `http://localhost:3000/api/shorten`
📍 `http://localhost:3000/r/:id`

---

### 🐳 Executando com Docker

> Opcional — Docker funcional, mas desativado para produção atual

```bash
docker-compose up --build
```

---

## 🔍 Endpoints da API

### POST `/api/shorten`

```json
{
  "urls": ["https://google.com", "https://openai.com"]
}
```

**Resposta:**

```json
{
  "results": [
    {
      "original": "https://google.com",
      "shortened": "http://localhost:3000/r/abc123"
    }
  ]
}
```

---

### GET `/r/:id`

Redireciona para a URL original, se existir.
Caso contrário, retorna `404 - URL não encontrada`.

---

## 🧠 Decisões de arquitetura

- **TypeScript**: segurança e produtividade com tipagem forte
- **MongoDB**: ideal para armazenar documentos simples como URLs encurtadas
- **Express**: minimalista e rápido, fácil de manter
- **Shortid**: simples e eficaz para geração de IDs curtos
- **Tailwind**: permite estilizar o frontend rapidamente com utilitários CSS

---

## 📄 Licença

Projeto desenvolvido por Bernardo Alves. Livre para fins educacionais.

---

## 👤 Contato

Sinta-se à vontade para entrar em contato comigo:

- **LinkedIn:** linkedin.com/in/bernardoalvesdev
- **E-mail:** bernardoalvesdev@gmail.com
- **Portfólio:** https://www.bernardoalvesdev.com.br
