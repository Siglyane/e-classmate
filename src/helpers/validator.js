const Recommendation = require("../models/recommendation")

// Verify if recoomendation exist and if user trying to menage 
// was the one who made it
exports.verifyRecommedation = async (id, req, res) => {
 try {
    const recommendation = await Recommendation.findById(id)

  if(!recommendation) {
    return res.status(204);
  }

  if(recommendation.userRecommending != req.userId) {
    return res.status(403).json({message: "Você não possui autorização"})
  }

  return recommendation;
} catch(error) {
    return res.status(500).json({message: error.message})
  }
}
