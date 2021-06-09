const path = require('path');
const File = require('../models/fileSchema');
const rootDir = require('../utils/path');

exports.uploadImg = async (req, res, next) => {
  const image = req.file;
  res.sendFile(
    path.join(rootDir, 'uploads', 'images', `test-${image.originalname}`)
  );
};
