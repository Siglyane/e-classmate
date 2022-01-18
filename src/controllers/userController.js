const Users = require("../models/user");
const bcrypt = require("bcrypt");
const { hashPassword} = require("../helpers/auth");
const jwt = require("jsonwebtoken")


// Create user and hash password
const createUser =  async (req, res) => {
  try{  
    const body = req.body

    const passwordHased = await hashPassword(body.password, res);
    body.password = passwordHased

    
    const user = await Users.create(body);
    user.password = undefined;  

    return res.status(201).json({
      message: "Usuario cadastrado com sucesso",
      user
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

// Check password informed and return token
const login = async (req, res) => {

  const {email, password} = req.body;

  try{
   
  const userRequired = await Users.findOne({email: email}).select('+password');

  if (!userRequired) {
    return res.status(404).json({message: "Usuário não encontrado"})
  }

  const checkPassword = await bcrypt.compare(password, userRequired.password);


  if (!checkPassword) {
    return res.status(404).json({message: "Senha incorreta"})
  }


  const secret = process.env.SECRET;

  const token = jwt.sign(
    { id: userRequired._id}, secret)

  return res.status(200).json({message: "Auth", token});
} catch(error) {
  return res.status(500).json({message: error.message})
}
}

// Return user based on id requested
const getById = async (req, res) => {
  try{
    const userRequired =  await Users.findById(req.params.id, '-password').populate('recommendation');

    if (!userRequired) {
      return res.status(200).json({message: "Usuário não encontrado"})
    }

    return res.status(200).json(userRequired)
  } catch(error){
    res.status(500).json({
        message: error.message,
    })
  }

};

// Updated informations based on currently logged id
const updatedUSer = async (req, res) => {
  try {
    const userRequired = await Users.findById(req.userId);
    
    const {name, email, gender, sexuality} = req.body
    userRequired.name = name || userRequired.name
    userRequired.email = email || userRequired.email
    userRequired.gender = gender || userRequired.gender
    userRequired.sexuality = sexuality || userRequired.sexuality

    const userSaved = await userRequired.save()
    res.status(200).json({
      user: userSaved
    })

  } catch(error){
    res.status(500).json({
        message: error.message,
    })
  }
};

// Delete user based on currently logged id
const deleteUser = async (req, res) => {
  try {
    const userRequired = await Users.findByIdAndDelete(req.userId);
    res.status(200).json({
      user: userRequired
    })
  } catch(error){
    res.status(500).json({
        message: error.message,
    })
  }
}

module.exports = {
  createUser,
  login,
  getById,
  updatedUSer,
  deleteUser
}