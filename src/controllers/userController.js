const Users = require("../models/user");
const bcrypt = require("bcrypt");
const { hashPassword } = require("../helpers/auth");
const jwt = require("jsonwebtoken")


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
  } catch (err) {
    return res.status(500).json({
      message: err.message
    });
  }
};


const login = async (req, res) => {
  const {email, password} = req.body;

  const userRequired = await Users.findOne({email: email}).select('+password');

  if (!userRequired) {
    return res.status(404);
  }

  const checkPassword = await bcrypt.compare(password, userRequired.password);

  if (!checkPassword) {
    return res.status(404)
  }


  const secret = process.env.SECRET;
  const token = jwt.sign(
    { id: userRequired._id}, secret)

  return res.status(200).json({message: "Auth", token});
}


const getAll = async (req, res) => {
  try {
    const userRequired = await Users.find();
    return res.status(200).json(userRequired);

  } catch(error){
    res.status(500).json({
        message: error.message,
    })
  }
}


const getById = async (req, res) => {
  try{
    const userRequired =  await Users.findById(req.params.id, '-password')
    return res.status(200).json(userRequired)
  }catch(error){
    res.status(500).json({
        message: error.message,
    })
  }

};

module.exports = {
  createUser,
  login,
  getAll,
  getById
}