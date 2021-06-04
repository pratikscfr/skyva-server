const express = require('express');
const router = express.Router();
const User = require('../../models/userSchema');

router.get('/', async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.send('Error' + error);
  }
});

module.exports = router;
