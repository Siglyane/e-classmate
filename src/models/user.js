const mongoose = require("mongoose");

//Informações do usuario 
const userSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type:String,
    required: true,
    // não retorna essa informação quando procura pelo usuário
    select: false
  },
  },{
    //Automaticamente gerencia data de criação e de updated
    timestamps: true,
    versionKey: false
  })

const User = mongoose.model("User", userSchema);

module.exports = User