const express = require('express');
const router = express.Router();

const getAllUsers = require('./userRoutes/getAllUsers');
const addNewUser = require('./userRoutes/addNewUser');

router.use('/user', getAllUsers);
router.use('/user', addNewUser);

module.exports = router;
