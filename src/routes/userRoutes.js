const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController");
const validator = require("../helpers/validators/userValidator");
const { checkAuth } = require("../middlewares/auth");


router.route("/create").post(validator, controller.createUser);
router.post("/login", controller.login);

router.get("/all", controller.getAll);
router.get("/:id", checkAuth, controller.getById);

module.exports = router;