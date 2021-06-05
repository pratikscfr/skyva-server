const User = require('../models/userSchema');

exports.addNewUser = async (req, res, next) => {
  const user = new User({
    name: req.body.name,
    address: req.body.address,
  });

  try {
    const data = await user.save();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send('Error ' + error);
  }
};

exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).send('Error' + error);
  }
};
