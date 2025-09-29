# 🎮 Loja Games - Backend  

Este projeto foi desenvolvido como parte do meu aprofundamento em **backend com NestJS**.  
A ideia foi construir uma **API RESTful** simples e organizada para uma lojinha de games, aplicando boas práticas de código, tipagem com **TypeScript** e persistência de dados utilizando **TypeORM** com banco de dados **MySQL**.  

---

## 📌 Funcionalidades  

- ✅ Cadastro de **Categorias**  
- ✅ Cadastro de **Produtos**  
- ✅ Relacionamento **Muitos-para-Um** (Produto → Categoria)  
- ✅ Consultas organizadas com **TypeORM**  
- ✅ Testes de endpoints com **Insomnia**  

---

## 🛠️ Tecnologias Utilizadas  

- [NestJS](https://nestjs.com/) — framework Node.js orientado a módulos  
- [TypeScript](https://www.typescriptlang.org/) — tipagem estática para maior robustez  
- [TypeORM](https://typeorm.io/) — ORM para mapeamento objeto-relacional  
- [MySQL](https://www.mysql.com/) — banco de dados relacional  
- [Insomnia](https://insomnia.rest/) — cliente para testes de API  

---

## 🗃️ Modelagem de Dados  

### Categoria  
```ts
id: number (PK)  
nome: string  
```

### Produto
```ts
id: number (PK)  
nome: string  
preco: decimal
estoque: int
data_lancamento: date  
categoria: Categoria (FK)
```
### 🔗 Relacionamento:

Um produto pertence a uma categoria

Uma categoria pode ter muitos produtos

📂 Estrutura do Projeto
```ts
src/
 ┣ 📁 categoria
 ┣ 📁 produto
 ┣ 📁 database
 ┣ app.module.ts
 ┗ main.ts
```
categoria → módulo de categorias (CRUD)

produto → módulo de produtos (CRUD + relacionamento)

database → configuração do TypeORM/MySQL

## ▶️ Como Executar

1- Clone o repositório
```ts
git clone https://github.com/seu-usuario/loja_games.git
```
2- Instale as dependências
```ts
npm install
```

3- Configure o banco de dados
Edite o arquivo app.module.ts ou use .env para ajustar as credenciais do MySQL.

4- Execute o projeto
```ts
npm run start:dev
```

## 📌 Exemplos de Requisições
Criar Categoria

POST /categorias
```ts
{
  "nome": "Ação"
}
```
Criar Produto

POST /produtos
```ts
{
	"nome": "Call of Duty - Modern Warfare",
	"preco": 349.90,
	"estoque": 49,
	"data_lancamento": "2024-05-10",
	"categoria": {
    "id": 1
  }
}


```

## 📖 Aprendizados

Durante o desenvolvimento, pude reforçar conceitos importantes como:

Organização de módulos no NestJS

Criação e consumo de relacionamentos no TypeORM

Uso do Insomnia para testes e validação da API

Boas práticas no desenvolvimento backend com TypeScript

## 🚀 Próximos Passos

Implementar autenticação (JWT)

Criar um sistema de usuários/admins

Deploy em nuvem para acesso público

## 👨‍💻 Autor

Feito com dedicação por Benner Dias ✨

Este projeto faz parte do meu processo de aprendizado em desenvolvimento backend.
