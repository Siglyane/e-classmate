// Imports dependency
const express = require("express");
const cors = require("cors");
require("dotenv-safe").config();

//Imports database
const db = require("./database/mongoConfig");


const userRoutes = require("./routes/userRoutes");
const classroomRoutes = require("./routes/classroomRoutes")
const index = require("./routes/index")
const recommendationRoutes = require("./routes/recommendationRoutes");

const app = express();

db.connect();

app.use(cors());
app.use(express.json());


// routes
app.use("/", index);
app.use("/user", userRoutes);
app.use("/class", classroomRoutes);
app.use("/recomm", recommendationRoutes);


module.exports = app;
