const mongoose = require("mongoose");
const ClassroomSchema = require("../models/classroom")

//Informações do usuario 
const UserSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "E-mail é obrigatório"],
    unique: true,
    lowercase: true,
  },
  password: {
    type:String,
    required: true,
    // não retorna essa informação quando procura pelo usuário
    select: false
  },
  gender: {
    type: String,
    enum: ['mulher cisgênero', 'homem cisgênero', 'mulher transgênero',
            'homem transgênero', 'não binário', 'outro', 'prefiro não responder'],
    default: 'prefiro não responder'
  },
  sexuality: {
    type: String,
    enum: ['heterossexual', 'homossexual', 'bissexual', 'assexual',
       'pansexual', 'prefiro não responder'],
    default: 'prefiro não responder'
  },
  recommendation: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Recommendation'
  }]
  },{
    //Automaticamente gerencia data de criação e de updated
    timestamps: true,
  })

const User = mongoose.model("User", UserSchema);

module.exports = User