const express = require('express');
const router = express.Router();

const getUsers = require('./userRoutes/getUsers');
const addNewUser = require('./userRoutes/addNewUser');
const deleteUser = require('./userRoutes/deleteUser');
const updateUser = require('./userRoutes/updateUser');
const addImage = require('./fileRoutes/addImage');
const verifyPhone = require('./userRoutes/verifyPhone');

router.use('/user', getUsers);
router.use('/user', addNewUser);
router.use('/user', deleteUser);
router.use('/user', updateUser);
router.use('/user/img', addImage);
router.use('/user', verifyPhone);
router.use('/', (req, res, next) => {
	const status = 500;
	const message = 'not found';

	res.status(status).json({ message: message });
});


module.exports = router;
