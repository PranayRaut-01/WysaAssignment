const express = require('express');
const router = express.Router();

///////////////// [ IMPORTED CONTROLLERS ] /////////////////
const userController= require("../controllers/userController");

///////////////// [ ALL API's HERE ] /////////////////
router.post('/sleepAssesement',userController.sleepAssesement)

///////////////// [ EXPRORTED ROUTHER ] /////////////////
module.exports = router;