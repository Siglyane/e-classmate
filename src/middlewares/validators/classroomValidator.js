const {check, validationResult} = require("express-validator");

const validateClassroom = [
  check("name")
  .trim()
  .notEmpty()
  .withMessage("Você deve informar um nome para a sala"),
  check("url")
  .trim()
  .notEmpty()
  .bail()
  .withMessage("Toda sala deve conter um link")
  .isURL()
  .withMessage("Link inválido"),
  check("subject")
  .notEmpty()
  .withMessage("Você deve informar o assunto que estudou"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })};
    next();
    }
];

module.exports = validateClassroom