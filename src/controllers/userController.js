const Users = require("../models/user");


const createUser =  async (req, res) => {
  try{  
    const user = await Users.create(req.body);
    user.password = undefined;

    return res.status(200).json({
      message: "Usuario cadastrado com sucesso",
      user
    })
  } catch (err) {
    return res.status(500).json({
      message: err.message
    })
  }
}

module.exports = {
  createUser
}