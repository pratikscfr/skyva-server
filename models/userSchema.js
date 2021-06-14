const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  countryCode: {
    type: String,
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  isPhoneVerified: {
    type: Boolean,
    default: false,
  },
  imageURL: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model('User', userSchema);
