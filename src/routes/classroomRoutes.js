const express = require("express");
const router = express.Router();
const controller = require("../controllers/classroomController");
const validator = require("../middlewares/validators/classroomValidator");
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

/*@route GET /class/filter
 *@desc List classroom based on filters
 *@access Public
 */
router.get("/filter", controller.getByType);

/*@route GET /class/:id
 *@desc Return classroom based on id
 *@access Public
 */
 router.get("/:id", controller.getById);

/*@route POST /class/login/:id
 *@desc 
 *@access Private
 */
router.patch("/login/:id", checkAuth, controller.loginClassroomById);

/*@route PATCH /class/offline/:id
 *@desc 
 *@access Private
 */
router.patch("/offline", checkAuth, controller.classroomOffline);

module.exports = router;