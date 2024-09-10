# NLW Pocket

*Início* : 09/09/2024 - *Fim* : 12/09/2024

Onde Estou ? 
Aula 01 - 1:09:45

## Descrição do Projeto


## Ferramentas e Bibliotecas 

## BackEnd
* [NodeJs](https://nodejs.org/pt)
* [TypeScript](https://www.npmjs.com/package/typescript)
* [FastiFy](https://www.npmjs.com/package/fastify)
* [TSX](https://www.npmjs.com/package/tsx)
* [Biome](https://www.npmjs.com/package/@biomejs/biome)
* [Drizzle-ORM](https://www.npmjs.com/package/drizzle-orm)
* [Drizzle-Kit](https://www.npmjs.com/package/drizzle-kit)
* [ZOD](https://www.npmjs.com/package/zod)
* [Postgres](https://www.npmjs.com/package/postgres) - Driver do PostGreSQL 
* [ParallelDrive](https://www.npmjs.com/package/@paralleldrive/cuid2) - Biblioteca de Geração de UUID
* [DayJS]() - Biblioteca de Datas 

## Infrastructure
* [Docker]()

## Database
* [PostgreSQL]() - Banco de Dados Relacional

## FrontEnd
* []()


## Comandos

### 🐳 Docker

```shell
# Roda o arquivo compose 
$ docker compose up -d

# Mostra os containers  
$ docker ps
```
### 🎲 Drizzle ORM

```shell
# Cria as Migrations
$ npx drizzle-kit generate

# Roda a Migration
$ npx drizzle-kit migrate

# Abre uma Ferramenta de Banco de Dados ( no Browser )
$ npx drizzle-kit studio

```
### 🖥️ Projeto 

```shell
# Roda o projeto em Dev
$ npm run dev
```

### 💡 Outros Comandos

```shell
# Gerar arquivo .gitignore
$ npx gitignore node
```