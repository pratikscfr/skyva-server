const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');
const auth = require('../../middleware/auth');

router.get('/', auth, userController.fetchUsers);
router.get('/:email', userController.getUser);
router.post('/login', userController.loginUser);

module.exports = router;
