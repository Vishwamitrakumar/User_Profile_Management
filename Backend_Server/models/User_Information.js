const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  profilePhoto: {
    type: String,
    required: true, // file name or file path
  },
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 4,
    maxlength: 20,
    trim: true,
  },
  currentPassword: {
    type: String,
    required: true,
  },
  newPassword: {
    type: String,
    required: true,
  },
  profession: {
    type: String,
    enum: ['Student', 'Developer', 'Entrepreneur'],
    required: true,
  },
  companyName: {
    type: String,
    required: function () {
      return this.profession === 'Entrepreneur';
    },
  },
  addressLine1: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true, 
  },
  state: {
    type: String,
    required: true, 
  },
  city: {
    type: String,
    required: true,
  },
  subscriptionPlan: {
    type: String,
    enum: ['Basic', 'Pro', 'Enterprise'],
    required: true,
  },
  newsletter: {
    type: Boolean,
    default: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
