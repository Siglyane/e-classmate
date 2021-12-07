const { check, validationResult } = require("express-validator");

const validateUser = [
  check("name")
    .trim()
    .notEmpty()
    .withMessage("Você deve informar seu nome"),
  check("email")
    .isEmail()
    .trim()
    .notEmpty()
    //Entender o noormalize e-mail
    .normalizeEmail()
    .withMessage("Informe um e-mail válido"),
  check("password")
    .notEmpty()
    .isStrongPassword()
    .withMessage("Senha muito fraca"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })};
    next();
    }
  ];

module.exports = validateUser