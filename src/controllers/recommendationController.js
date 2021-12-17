const { verifyRecommedation } = require("../helpers/validator");
const Recommendation = require("../models/recommendation");
const User = require("../models/user");


// Create a recommendation based on user's id send
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


    res.status(201).json({message: "Recomendação cadastrada com sucesso", userRecommended});

  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}


const updateRecommendation = async (req, res) => {
  try{

    const recommendationRequested = await verifyRecommedation(req.params.id, req, res);
    recommendationRequested.recommendation = req.body.recommendation;
    recommendationRequested.save();    

    return res.status(200).send(recommendationRequested);

  }catch (error) {
    return res.status(500).json({message: error.message})
  }
}


const deleteRecommendation = async (req, res) => {
  try{
    const recommendationRequested = await verifyRecommedation(req.params.id, req, res);
    recommendationRequested.delete();
    
    return res.status(200).send(recommendationRequested);
  }catch (error) {
    return res.status(500).json({message: error.message})
  }
}

module.exports = {
  createRecommendation,
  updateRecommendation,
  deleteRecommendation
}