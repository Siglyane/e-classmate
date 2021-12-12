# e-classmate

Este README e projeto estão em desenvolvimento. 
<br/><br/>

## Inspiração
***
Esta API foi desenvolvida como Projeto Final de conclusão do curso Todas Em Tech Backend {reprograma}, a proposta era criar um API aplicando CRUD com tema livre.

Procurando por necessidades que me motivassem a contruir uma API, eu percebi uma dificuldade pessol em me relacionar com colegas de cursos EAD. Antes da pandemia sempre escolhi por fazer cursos presenciais, pois a conexão com meus colegas, a troca de conhecimento, é algo essencial para mim e isto não acontecia em cursos onlines.

Dentro da {reprograma} percebi que não é necessário estar na presença das pessoas para criar conexões e gostaria de criar um local onde todos pudessem experimentar isto, criar uma comunidade de pessoas para se apoiar e se desenvolverem juntos. 
<br/><br/>

## Descrição da API
***
O projeto é uma API REST que permite o cadastro de pessoas, estas pessoas podem então criar novas "salas virtuais" ou se cadastrar em uma já criada que ainda possua espaço disponível. As se cadastrar a pessoa receberá o link que o criador da sala disponibilizou.

Cada sala possui linguagens e assuntos definidos para os usuários pesquisarem e encontrarem pessoas que estejam estudando o mesmo que eles independente de por onde estejam estudando. 
<br/><br/>


## Funcionalidades/Regras de Negócio
***
- Cadastro de estudantes e salas virtuais conforme temas de estudo.
- Filtros de segurança para 
<br/><br/>

## Arquitetura
***
```
 📁 reprograma-e-classmate
   |
   |-  📁 src
   |    |
   |    |- 📁 controllers
   |         |- 📑 classroomController.js
   |         |- 📑 userController.js
   |         |- 📑 .js 
   |
   |    |- 📁 database
   |         |- 📑 mongoConfig.js
   |
       |- 📁 helpers
   |         |- 📑 auth.js
   |
       |- 📁 middlewares
   |         |- 📑 auth.js
   |
   |    |- 📁 models
   |         |- 📑 classroom.js
   |         |- 📑 user.js
   |         |- 📑 .js
   |
   |    |- 📁 routes
   |         |- 📑 clasroomRoutes.js 
   |         |- 📑 userRoutes.js
   |         |- 📑 .js
   |
   |    |- 📑 app.js
   |
   |
   |- 📑 .env
   |- 📑 .env.example
   |- 📑 .gitignore
   |- 📑 package-lock.json
   |- 📑 package.json
   |- 📑 README.md
   |- 📑 server.js
   ```

