// Importa dependências
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv-safe");

//Importa banco de dados
const db = require("./database/mongoConfig");

//Rotas
const userRoutes = require("./routes/userRoutes");
const classroomRoutes = require("./routes/classroomRoutes")

const app = express();

app.use(cors());
app.use(express.json());

console.log("app")
app.use("/usuario", userRoutes);
app.use("/class", classroomRoutes);

dotenv.config();

db.connect();

module.exports = app;

