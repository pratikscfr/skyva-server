const express = require('express');
const router = express.Router();
const User = require('../../models/userSchema');

router.post('/', async (req, res, next) => {
  const user = new User({
    name: req.body.name,
    address: req.body.address,
    email: req.body.email,
  });

  try {
    const data = await user.save();
    res.json(data);
  } catch (error) {
    res.send('Error ' + error);
  }
});

module.exports = router;
