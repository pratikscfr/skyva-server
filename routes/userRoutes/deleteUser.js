const express = require("express");
const router = express.Router();
const userController = require("../../controllers/userController");

router.delete("/", userController.delete);

module.exports = router;
