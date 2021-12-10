const mongoose = require("mongoose");

//Informações da sala de aula
const ClassroomSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required:true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  url: {
    type: String,
    required: true
  },
  maxOccupation: {
    type: Number,
    min: 2,
    max: 500,
    default: 500
  },
  //Cria em enum como teste, alterar para Array
  // olhar possibilidade de criar uma banco de dados de opções
  // Deveria dividir tanto? Talvez somente criar tags seja o suficiente
  languages: {
    type: String,
    enum: ["java","javascript", "lua", "ruby"],
    required:true
  },
  subject: {
    type: Array,
    required: true
  },
  usersLoggedIn: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]

}, {timestamps: true})

const Classroom = mongoose.model("Classroom", ClassroomSchema);

module.exports = Classroom