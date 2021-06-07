const User = require('../models/userSchema');

exports.addNewUser = async (req, res, next) => {
  const user = new User({
    name: req.body.name,
    address: req.body.address,
    email: req.body.email,
  });

  user
    .save()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(500).json({ message: err }));
};

exports.getUser = async (req, res, next) => {
  User.find({ email: req.params.email })
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => res.status(404).json({ message: err }));
};

exports.fetchUsers = async (req, res, next) => {
  User.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => res.status(404).json({ message: err }));
};

exports.delete = async (req, res, next) => {
  const email = req.body.email;
  if (!email) {
    res.status(402).json({ message: 'email required' });
  } else {
    User.deleteOne({ email: email })
      .then(() => {
        res.status(200).json({ message: 'sucessfully deleted the user' });
      })
      .catch((err) => res.status(500).json({ message: err }));
  }
};
