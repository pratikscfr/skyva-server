const User = require("../models/userSchema");

exports.addNewUser = async (req, res, next) => {
  try {
    const user = new User({
      name: req.body.name,
      address: req.body.address,
      email: req.body.email,
    });
    const data = await user.save();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).send("Error" + error);
  }
};


exports.delete = async (req, res, next) => {
  const email = req.body.email;
  if (!email) {
    res.status(402).json({ message: "email required" });
  } else {
    User.deleteOne({ email: email })
      .then(() => {
        res.status(200).json({ message: "sucessfully deleted the user" });
      })
      .catch((err) => res.status(500).json({ message: err }));
  }
};
