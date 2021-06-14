const rootDir = require('../utils/path');
const path = require('path');
const User = require('../models/userSchema');
const jwt = require('jsonwebtoken');

exports.addNewUser = async (req, res, next) => {
  try {
    const { name, address, email, countryCode, phone } = req.body;
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    user = new User({
      name,
      address,
      email,
      countryCode,
      phone,
    });

    await user.save();

    //return jwt
    const payload = {
      user: {
        id: user.id,
      },
    };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 36000 },
      (err, token) => {
        if (err) throw err;
        return res.json({ token });
      }
    );
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.loginUser = async (req, res, next) => {
  try {
    const email = req.body.email;
    if (!email) {
      return res.status(402).json({ message: 'email required' });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    //return jwt
    const payload = {
      user: {
        id: user.id,
      },
    };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 36000 },
      (err, token) => {
        if (err) throw err;
        return res.json({ token });
      }
    );
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const email = req.params.email;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.fetchUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.delete = async (req, res, next) => {
  try {
    const email = req.body.email;
    if (!email) {
      return res.status(402).json({ message: 'email required' });
    }

    const user = await User.findOneAndDelete({ email: email });

    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    return res.status(200).json({ message: 'sucessfully deleted the user' });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const { name, address, email, countryCode, phone } = req.body;
    if (!email) {
      res.status(402).json({ message: 'email required' });
    }

    const updateFields = {};
    if (name) updateFields.name = name;
    if (address) updateFields.address = address;
    if (countryCode) updateFields.countryCode = countryCode;
    if (phone) updateFields.phone = phone;
    const user = await User.findOneAndUpdate(
      { email },
      { $set: updateFields },
      { new: true }
    );

    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: err.message });
  }
};

exports.getFile = async (req, res, next) => {
  User.find({ email: req.params.email })
    .then((user) => {
      res
        .status(200)
        .sendFile(
          path.join(rootDir, 'uploads', 'images', `${user[0].imageURL}`)
        );
    })
    .catch((err) => res.status(404).json({ message: 'user not found' }));
  return res.status(500).json({ message: err.message });
};
