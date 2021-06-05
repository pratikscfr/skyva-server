const express = require('express');
const router = express.Router();

const getUsers = require('./userRoutes/getUsers');
const addNewUser = require('./userRoutes/addNewUser');

router.use('/user', getUsers);
router.use('/user', addNewUser);

module.exports = router;
