const File = require('../models/fileSchema');

exports.uploadImg = async (req, res, next) => {
  const image = req.file;
  console.log(image);
  res.set({ 'Content-Type': 'image/png' });
  res.sendFile(
    '../uploads/images/2021-06-09T18-49-52.406Z-kai-pilger-Ef6iL87-vOA-unsplash.jpg'
  );
};
