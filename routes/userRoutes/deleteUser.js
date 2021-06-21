const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');
const auth = require('../../middleware/auth');

router.delete('/', auth, userController.delete);

module.exports = router;
