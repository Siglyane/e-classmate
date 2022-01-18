const { check, validationResult } = require("express-validator");

const validateUser = [
  check("name")
    .trim()
    .notEmpty()
    .bail()
    .withMessage("Você deve informar seu nome")
    .isLength({min: 3})
    .withMessage("Você deve um nome válido"),
  check("email")
    .trim()
    .notEmpty()
    .withMessage("É obrigatorio informar um e-mail")
    .bail()
    .normalizeEmail()
    .isEmail()
    .withMessage("Informe um e-mail válido"),
  check("password")
    .notEmpty()
    .isStrongPassword({
      minLength: 6,
      maxLength: 20,
      minUppercase: 1,
      minLowercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })
    .withMessage("Senha muito fraca. sua senha deve conter de 6 a 20 caracteres entre letras, números e simbolos"),
    check("termsOfUse")
    .trim()
    .isBoolean()
    .matches(true)
    .withMessage("Aceite os termos de uso para continuar"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })};
    next();
    }
  ];

module.exports = validateUser