const express = require("express");
const router = express.Router();
const controller = require("../controllers/recommendationController");
const { checkAuth } = require("../middlewares/auth");
const validator = require("../middlewares/validators/recommendationValidator")

/*@router POST /recomm/create/:id
 *@desc Create a new recommendation based on id
 *@access Private
 */
router.post("/create/:id", checkAuth, validator, controller.createRecommendation);

/*@router POST /recomm/create/:id
 *@desc Create a new recommendation based on id
 *@access Private
 */
router.patch("/update/:id", checkAuth, validator, controller.updateRecommendation);

module.exports = router;