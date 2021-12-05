// Importa dependências
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv-safe");

//Importa banco de dados
const db = require("./database/mongoConfig");

const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/usuario", userRoutes);

dotenv.config();

db.connect();

module.exports = app;

