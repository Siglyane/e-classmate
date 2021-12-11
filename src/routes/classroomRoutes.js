const express = require("express");
const router = express.Router();
const controller = require("../controllers/classroomController");
const validator = require("../helpers/validators/classroomValidator");
const { checkAuth } = require("../middlewares/auth");


/*@route POST /class/create
 *@desc Created new classroom
 *@access Private
 */
router.post("/create", checkAuth, validator, controller.createClassroom);

/*@route GET /class/all
 *@desc List all classroom
 *@access Public
 */
router.get("/all", controller.getAll);

module.exports = router;