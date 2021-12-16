/* Imports */
const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController");
const validator = require("../middlewares/validators/userValidator");
const { checkAuth } = require("../middlewares/auth");

/*@route POST /user/create
 *@desc Create new user
 *@access Public
 */
router.post("/create", validator, controller.createUser);

/*@route POST /user/login
 *@desc Access account 
 *@access Public
 */
router.post("/login", controller.login);

/*@route GET /user/:id
 *@desc Return user profile based on id
 *@acess Private
 */
router.get("/:id", checkAuth, controller.getById);

/*@route PUT /user/update
 *@desc Update user profile based on body
 *@access Private
 */
router.put("/update", checkAuth, validator, controller.updatedUSer);

/*@route DELETE /user/delete
 *@desc Delete user profile
 *@access Private
 */
router.delete("/delete", checkAuth, controller.deleteUser);

module.exports = router;