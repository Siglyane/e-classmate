const Recommendation = require("../models/recommendation");
const User = require("../models/user");


// Create a recommendation based on id send
const createRecommendation = async (req, res) => {
  try {
    const recommendation = req.body;
    const userRecommendedId =  req.params.id
    recommendation.userRecommending = req.userId;

    const userRecommended = await User.findById(userRecommendedId);

    if (!userRecommended) {
      return res.status(404).json({message: "Usuário não encontrado"})
    }

    recommendation.userRecommended = userRecommendedId;
    const newRecommendation = await Recommendation.create(recommendation);

    userRecommended.recommendation.push(newRecommendation);
    await userRecommended.save()


    res.status(200).json({message: "Recomendação cadastrada com sucesso", userRecommended});

  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

const updateRecommendation = async (req, res) => {
  try{
    const recommendationRequested = await Recommendation.findById(req.params.id)

    if(!recommendationRequested) {
      return res.status(404).json({message: "Recomendação não encontrada"});
    }

    if(recommendationRequested.userRecommending != req.userId) {
      return res.status(403).json({message: "Você não possui autorização"})
    }

    recommendationRequested.recommendation = req.body.recommendation;
    recommendationRequested.save();    

    return res.status(200).send(recommendationRequested);

  }catch (error) {
    return res.status(500).json({message: error.message})
  }
}

const deleteRecommendation = async (req, res) => {
  try{

  }catch (error) {
    return res.status(500).json({message: error.message})
  }
}

module.exports = {
  createRecommendation,
  updateRecommendation,
  deleteRecommendation
}