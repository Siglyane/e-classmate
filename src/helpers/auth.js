const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.hashPassword = async(password, res) => {
  try{
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(password, salt);

    return hash
  } catch (err) {
    res.status(500).json({message: err.message})
  }
}