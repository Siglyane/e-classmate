# e-classmate

Este README e projeto estão em desenvolvimento. 
<br/><br/>

## Inspiração
Esta API foi desenvolvida como Projeto Final de conclusão do curso Todas Em Tech Backend {reprograma}, a proposta era criar um API aplicando CRUD com tema livre.

Procurando por necessidades que me motivassem a contruir uma API, eu percebi uma dificuldade pessol em me relacionar com colegas de cursos EAD. Antes da pandemia sempre escolhi por fazer cursos presenciais, pois a conexão com meus colegas, a troca de conhecimento, é algo essencial para mim e isto não acontecia em cursos onlines.

Dentro da {reprograma} percebi que não é necessário estar na presença das pessoas para criar conexões e gostaria de criar um local onde todos pudessem experimentar isto, criar uma comunidade de pessoas para se apoiar e se desenvolverem juntos. 
<br/><br/>

## Sumário


## Descrição da API
O projeto é uma API REST que permite o cadastro de pessoas, estas pessoas podem então criar novas "salas virtuais" ou se cadastrar em uma já criada que ainda possua espaço disponível. As se cadastrar a pessoa receberá o link que o criador da sala disponibilizou.

Cada sala possui linguagens e assuntos definidos para os usuários pesquisarem e encontrarem pessoas que estejam estudando o mesmo que eles independente de por onde estejam estudando. 
<br/><br/>


## Funcionalidades/Regras de Negócio
- Cadastro de estudantes e salas virtuais conforme temas de estudo.
- Filtros de segurança para 
<br/><br/>

## Arquitetura
```
 📁 reprograma-e-classmate
   |
   |- 📁 src
   |   |
   |   |- 📁 controllers
   |       |- 📑 classroomController.js
   |       |- 📑 recommendationController.js 
   |       |- 📑 userController.js
   |
   |   |- 📁 database
   |       |- 📑 mongoConfig.js
   |
   |   |- 📁 helpers
   |       |- 📑 auth.js
   |
   |   |- 📁 middlewares
   |       |- 📁 validators.js
   |           |- 📑 classroomValidator.js
   |           |- 📑 userValidator.js
   |       |- 📑 auth.js
   |
   |   |- 📁 models
   |       |- 📑 classroom.js
   |       |- 📑 recommendation.js
   |       |- 📑 user.js
   |
   |    |- 📁 routes
   |       |- 📑 clasroomRoutes.js 
   |       |- 📑 index.js
   |       |- 📑 recommendationRoutes.js
   |       |- 📑 userRoutes.js
   |
   |    |- 📑 app.js
   |
   |
   |- 📑 .env
   |- 📑 .env.example
   |- 📑 .gitignore
   |- 📑 package-lock.json
   |- 📑 package.json
   |- 📑 Procfile
   |- 📑 README.md
   |- 📑 server.js
   ```

   ## Instalação
Para a instalação do projeto siga as instruções:
### Pré-requisitos
É necesário possuir instalado as ferramentas:
- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/)
- database NoSQL [Mongodb](https://www.mongodb.com)
- IDE de sua preferencia, para a criação deste projeto foi utilizado o [VSCode](https://code.visualstudio.com).

### Rodando o Projeto
1. Clone este projeto

  ```$ git clone https://github.com/Siglyane/e-classmate.git```

2. Acesse o repositório local

  ```$ cd e-classmate ```

3. Instale as dependências

  ```$ npm install```

4. Crie um arquivo ```.env``` conforme o ```.env.example``` e adicione os valores as variáveis de ambiente. 

5. Execute o servidor

  ```$ npm start```

## Tecnologias

Para construção desse projeto foi utilizado:
- [JavaScript](https://www.javascript.com)
- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com)
- [Postman](https://www.postman.com)
- [VSCode](https://code.visualstudio.com)
- [heroku](https://id.heroku.com/login)

### Pacotes Utilizados
- [mongoose](https://mongoosejs.com)
- [nodemon](https://nodemon.io)
- [express](https://expressjs.com/pt-br/)
- [cors](https://www.npmjs.com/package/cors)
- [dotenv-safe](https://www.npmjs.com/package/dotenv-safe)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [express-validator](https://www.npmjs.com/package/express-validator)

## Rotas e dados