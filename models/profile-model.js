const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    default: new mongoose.Types.ObjectId('678a338d5c6c458299875635'),
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },}, { collection: 'profiles' });

module.exports = mongoose.model('ProfileModel', ProfileSchema);