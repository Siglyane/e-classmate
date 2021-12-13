const express = require("express");
const router = express.Router();
const controller = require("../controllers/recommendationController");
const { checkAuth } = require("../middlewares/auth");

/*@router POST /recomm/create/:id
 *@desc Create a new recommendation based on id
 *@access Private
 */
router.post("/create/:id", checkAuth, controller.createRecommendation);

module.exports = router;