const Recommendation = require("../models/recommendation");
const User = require("../models/user");


// Create a recommendation based on id send
const createRecommendation = async (req, res) => {
  try {
    const recommendation = req.body;
    const userRecommendedId =  req.params.id
    recommendation.userRecommended = userRecommendedId;
    recommendation.userRecommending = req.userId;

    const newRecommendation = await Recommendation.create(recommendation);

    const userRecommended = await User.findById(userRecommendedId);

    userRecommended.recommendation.push(newRecommendation);
    await userRecommended.save()


    res.status(200).json({message: "Recomendação cadastrada com sucesso", userRecommended});

  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

module.exports = {
  createRecommendation
}