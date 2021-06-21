const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');
const auth = require('../../middleware/auth');

router.get('/', auth, userController.fetchUsers);
router.get('/:email', auth, userController.getUser);
router.get('/img/:email', userController.getFile);
router.get('/token/:email', userController.getfcmToken);
router.post('/login', userController.loginUser);

module.exports = router;
