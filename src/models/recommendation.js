const mongoose = require("mongoose");

const RecommendationSchema = mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  recommendation: {
    type: String,
    required: true
  }, 
  userRecommended: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  userRecommending: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

const Recommendation = mongoose.model('Recommendation', RecommendationSchema);

module.exports = Recommendation;