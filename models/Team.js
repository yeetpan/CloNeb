const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: String,
  collegeName: String,
  rollNo: String,
  gmail: String, // Reference to the 'gmail' field in User schema
  phone: String,
  profilePic: String,
  instagramBio: String,
  bio: String,
  customFields: { type: Map, of: String },
  token: {
    type: String,
    default: function () {
      return generateRandomToken();
    },
    unique: true,
  },
  isVerified: {
    type: Boolean,
    default: true,
  },
  acceptanceCode: {
    type: String,
    required: true,
    unique: true,
    default: function () {
      return generateRandomAcceptanceCode(10);
    },
  },
  
  adminId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
});

const Team = mongoose.model('teams', teamSchema);

module.exports = Team;
