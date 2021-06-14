const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');

router.get('/', userController.fetchUsers);
router.get('/:email', userController.getUser);
router.get('/img/:email', userController.getFile);

module.exports = router;
