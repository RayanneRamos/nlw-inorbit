<h1 align='center'>in.orbit</h1>

<p align='center'>
  <img src='https://github.com/user-attachments/assets/1db9489e-d9b7-4f98-a139-ffea3dcd8712' alt='in.orbit' />
</p>

<p  align='center'>
  <img src='https://img.shields.io/badge/license-MIT-%23835afd' alt='License' />
  <img src='https://img.shields.io/badge/forks-MIT-%23835afd' alt='Forks' />
  <img src='https://img.shields.io/badge/stars-MIT-%23835afd' alt='Stars' />
</p>

<br>

## 💻 Projeto

[inorbit](https://nlw-inorbit-ky6sa7qtr-rayanneramos-projects.vercel.app/) Este projeto é um aplicativo que ajuda você a construir e acompanhar hábitos de forma eficiente. Com ele, você pode escolher o hábito que deseja adotar, definir o número de dias que pretende realizar essa atividade, e monitorar seu progresso ao longo do tempo.

## 🌟 Funcionalidades

* <strong>Escolha de Hábito</strong>: Selecione qualquer hábito que você deseja adicionar à sua rotina.
* <strong>Definição de Metas</strong>: Estabeleça quantos dias pretende realizar o hábito.
* <strong>Acompanhamento de Progresso</strong>: Conforme você for completando o hábito, seu progresso será atualizado automaticamente.
* <strong>Visualização de Metas</strong>: Veja quantas metas você já completou e quantas ainda faltam para atingir seu objetivo.

## 🧪 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Typescript](https://www.typescriptlang.org/)
- [DrizzleOrm](https://orm.drizzle.team/)
- [DrizzleKit](https://orm.drizzle.team/kit-docs/overview)
- [Fastify](https://fastify.io/)
- [Postgres](https://www.postgresql.org/)
- [Zod](https://zod.dev/)
- [BiomeJS](https://biomejs.dev/pt-br/)
- [Dayjs](https://day.js.org/)
- [Paralleldrive/cuid2](https://github.com/paralleldrive/cuid2)

## 🚀 Instalação

```bash
  # Clone o repositório e entre na pasta do projeto
  $ git clone https://github.com/RayanneRamos/nlw-inorbit.git
  $ cd nlw-inorbit
  $ cd server
  # Instale as dependências
  $ npm install
  # ou
  $ yarn install
  # Execute a aplicação
  $ npm run dev
  # ou
  $ yarn start
```

Para ver a aplicação rodando abra nas rotas cadastradas!

## 🔖 Layout

- [Web](https://www.figma.com/design/KyTQ8TN4r72GET45yfBixs/NLW-Pocket-JS-%E2%80%A2-in.orbit-(Community)?node-id=2001-337&t=S7QDugNsfTuYbQCX-1)

## 🧩 Rotas do Server

Aqui você encontra todas as rotas disponíveis na aplicação.

- `POST http://localhost:3333/goals` - Cria uma nova meta
- `POST http://localhost:3333/completions`- Completa um hábito
- `GET http://localhost:3333/pending-goals` - Busca os hábitos cadastrados
- `GET http://localhost:3333/summary` - Mostra o resumo dos hábitos completos e incompletos

## 📝 License

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para obter mais detalhes.

---

<p align='center'>Criado by Rayanne Ramos</p>
