# NLW AGENTS - ANALISADOR DE CONTEÚDO

Projeto desenvolvido durante o evento Next Level Week (NLW) da Rocketseat, focado na criação de um analisador de conteúdo de lives utilizando Inteligência Artificial.

## 💻 Tecnologias

### Backend
- **Node.js** com TypeScript nativo (experimental strip types)
- **Fastify** - Framework web rápido e eficiente 
- **PostgreSQL** com extensão **pgvector** para vetores
- **Drizzle ORM** - ORM com type-safety para operações no banco
- **Zod** - Validação de schemas
- **Docker** - Containerização do banco de dados
- **Biome** - Linting e formatação de código
- **CORS** - Segurança para requisições cross-origin

### Frontend
- **React 19.1** - Biblioteca para interfaces de usuário
- **TypeScript 5.8** - Superset JavaScript com tipagem estática
- **Vite 7.0** - Build tool e servidor de desenvolvimento
- **TailwindCSS 4.1** - Framework CSS utility-first
- **React Router Dom 7.6** - Roteamento da aplicação
- **TanStack React Query 5.8** - Gerenciamento de estado e cache
- **Radix UI** - Componentes primitivos acessíveis
- **Shadcn/ui** - Sistema de componentes customizáveis
- **Lucide React** - Biblioteca de ícones vetoriais

## 🏗️ Arquitetura

### Backend (`/server`)
- Arquitetura em camadas (routes, schemas, db)
- Migrations automatizadas com DrizzleORM
- Containerização com Docker e PostgreSQL
- Configuração de variáveis ambiente com Zod
- Type-safety em toda a aplicação
- API RESTful com Fastify
- Validação de dados com Zod

### Frontend (`/web`)
- Arquitetura baseada em componentes
- Design System escalável com Radix UI
- Gerenciamento de rotas com React Router
- Gerenciamento de estado global e cache com React Query
- Estilização moderna com TailwindCSS
- Suporte a temas Dark/Light
- Componentes acessíveis e reutilizáveis

## ⚙️ Funcionalidades
- Criação e gerenciamento de salas
- Listagem dinâmica de salas
- Visualização detalhada de cada sala
- Análise de conteúdo com IA
- Interface responsiva e acessível
- Suporte a temas claro/escuro

## 🚀 Como executar

### Pré-requisitos
- Node.js instalado
- Docker instalado
- NPM ou Yarn

## Backend
```bash
# Acessar pasta raiz
nlw-agents-analisador-conteudo

# Acessar diretório
cd ./server

# Configurar variáveis ambiente
cp .env.example .env
PORT=3333
DATABASE_URL=postgresql://docker:docker@localhost:5432/agents

# Iniciar banco de dados
docker compose up -d

# Instalar dependências
npm install

# Executar migrations
npm run migrate

# Popular banco (opcional)
npm run seed

# Iniciar servidor
  # Desenvolvimento
npm run dev
  # Produção
npm run start
```

### 🌐 Endpoints
A API estará disponível em `http://localhost:3333`

- `GET /health` - Health check da aplicação
- `GET /rooms` - Lista as salas disponíveis

## Frontend
### Integração
O projeto consome uma API que deve estar rodando na porta 3333. Certifique-se de que o backend esteja configurado e executando antes de iniciar o frontend.

```bash
# Acessar pasta raiz
nlw-agents-analisador-conteudo

# Acessar diretório
cd ./web

# Instalar dependências 
npm install

# Iniciar aplicação
npm run dev

# Acesso Web
A aplicação estará disponível em `http://localhost:5173`
```

---

<div align="center">
  Feito com 💜 durante o NLW Agents da <a target="_blank" href="https://rocketseat.com.br">Rocketseat</a>
</div>