const express = require("express");
const router = express.Router();
const labs = require ("../controllers/labs")
router.get("/" , labs.getAllLabs)
router.get("/:labId" , labs.getOneLab)

module.exports = router;