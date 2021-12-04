// Importa dependências
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv-safe");

//Importa banco de dados
const db = require("./database/mongoConfig");

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

db.connect();

module.exports = app;

