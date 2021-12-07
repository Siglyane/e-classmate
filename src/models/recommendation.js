const mongoose = require("mongoose");

const recommendationSchema = mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  recommendation: {
    type: String,
    required: true
  }, 
  userRecommended: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  userRecommending: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  }
})