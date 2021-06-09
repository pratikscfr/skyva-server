const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  image: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model('File', userSchema);
