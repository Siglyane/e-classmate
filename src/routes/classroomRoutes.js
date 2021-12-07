const express = require("express");
const router = express.Router();
const controller = require("../controllers/classroomController");
const validator = require("../middlewares/validators/classroomValidator");

console.log("route")
router.route("/create").post(validator, controller.createClassroom);

module.exports = router;