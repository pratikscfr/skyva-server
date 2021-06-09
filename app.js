const express = require('express');
//const morgan = require('morgan');
const routes = require('./routes/routes');
const cors = require('cors');
const multer = require('multer');
const methodOverride = require('method-override');

const fileStorageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/images');
  },
  filename: (req, file, cb) => {
    cb(
      null,
      new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname
    );
  },
});

express.urlencoded({ extended: false });
const app = express();

//app.use(morgan('dev'));
app.use(cors());
app.use(methodOverride('_method'));
app.use(multer({ storage: fileStorageConfig }).single('image'));
app.use(express.json());
app.use(routes);

module.exports = app;
