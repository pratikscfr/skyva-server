const User = require('../models/userSchema');

exports.addNewUser = async (req, res, next) => {
  const user = new User({
    name: req.body.name,
    address: req.body.address,
  });

  try {
    const data = await user.save();
    res.json(data);
  } catch (error) {
    res.send('Error ' + error);
  }
};

exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.send('Error' + error);
  }
};
