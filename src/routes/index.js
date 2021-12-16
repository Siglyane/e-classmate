const express = require("express");
const router = express.Router();


/*@route GET /
 *@desc Open route
 *@access Public
 */
router.get("/", (req, res) => {
  res.status(200).json({message: "Bem-vindo!"})
})

module.exports = router;