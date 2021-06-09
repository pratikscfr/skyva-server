const File = require('../models/fileSchema');

exports.uploadImg = async (req, res, next) => {
  const image = req.file;
  console.log(image);
  res.set({ 'Content-Type': 'image/png' });
  res.send('done');
};
