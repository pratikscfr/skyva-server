const path = require('path');
const File = require('../models/fileSchema');
const rootDir = require('../utils/path');
const User = require('../models/userSchema');

exports.uploadImg = async (req, res, next) => {
  const image = req.file;
  const email = req.body.email;
  if (!email) {
    res.status(402).json({ message: 'email required' });
  }
  console.log(image);
  const updateFields = {};
  if (image) updateFields.imageURL = image.filename;
  User.findOneAndUpdate({ email }, { $set: updateFields }, { new: true })
    .then(() => {
      res.status(200);
      res.sendFile(
        path.join(rootDir, 'uploads', 'images', `test-${image.originalname}`)
      );
    })
    .catch((error) => {
      res.status(400).json({ message: 'User not found' });
    });
};
