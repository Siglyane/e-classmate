const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController");
const validator = require("../middlewares/validators/userValidator");

router.route("/create").post(validator, controller.createUser);

module.exports = router;