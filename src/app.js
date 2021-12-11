// Imports dependency
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv-safe");

//Imports database
const db = require("./database/mongoConfig");


const userRoutes = require("./routes/userRoutes");
const classroomRoutes = require("./routes/classroomRoutes")
const index = require("./routes/index")

const app = express();

app.use(cors());
app.use(express.json());

console.log("app")

// routes
app.use("/", )
app.use("/user", userRoutes);
app.use("/class", classroomRoutes);

dotenv.config();

db.connect();

module.exports = app;
