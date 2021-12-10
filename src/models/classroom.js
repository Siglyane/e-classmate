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