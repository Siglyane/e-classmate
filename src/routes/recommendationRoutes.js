const express = require("express");
const router = express.Router();
const controller = require("../controllers/recommendationController");
const { checkAuth } = require("../middlewares/auth");
const validator = require("../middlewares/validators/recommendationValidator")

/*@router POST /recomm/create/:id
 *@desc Create a new recommendation based on user recommended's id
 *@access Private
 */
router.post("/create/:id", checkAuth, validator, controller.createRecommendation);

/*@router PATCH /recomm/update/:id
 *@desc Update recommendation based on id
 *@access Private
 */
router.patch("/update/:id", checkAuth, validator, controller.updateRecommendation);

/*@router DELETE /recomm/delete/:id
 *@desc Delete recommendation based on id
 *@access Private
 */
router.delete("/delete/:id", checkAuth, controller.deleteRecommendation);

module.exports = router;