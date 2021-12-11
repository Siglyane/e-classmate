// Open Route

const express = require("express");
const router = express.Router();


/*@route 
 *@desc 
 *@access 
 */
router.get("/", (req, res) => {
  res.status(200).json({message: "Bem-vindo!"})
})

module.exports = router;