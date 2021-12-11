const mongoose = require("mongoose");

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
  },
  password: {
    type:String,
    required: true,
    select: false // Don't return password when listed
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
    timestamps: true, //automatically manage createdAt and updatedAt
  })

const User = mongoose.model("User", UserSchema);

module.exports = User