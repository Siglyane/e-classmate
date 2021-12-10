const express = require("express");
const router = express.Router();
const controller = require("../controllers/classroomController");
const validator = require("../helpers/validators/classroomValidator");
const { checkAuth } = require("../middlewares/auth");

console.log("route")
router.route("/create").post(checkAuth, validator, controller.createClassroom);
router.get("/all", controller.getAll);

module.exports = router;