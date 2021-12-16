const {check, validationResult} = require("express-validator");

const validateClassroom = [
  check("recommendation")
  .trim()
  .notEmpty()
  .withMessage("Você deve adicionar uma recomendação!"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })};
    next();
    }
];

module.exports = validateClassroom