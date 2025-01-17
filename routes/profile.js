const express = require('express');
const ProfileModel = require('../models/profile-model');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Fetch profile by username from Authorization header
router.get('/', authMiddleware, async (req, res) => {
  const username = req.username;
  console.log(username);
  try {
    // Find the profile by userId
    const profile = await ProfileModel.findOne({ userId: username });

    if (!profile) {
      return res.status(404).json({ message: 'Profile not found', errorCode: "PROFILE_0001" });
    }

    res.json(profile);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update profile by userId
router.post('/update', authMiddleware, async (req, res) => {
  try {
    // Find the profile by _id and update it
    const profile = await ProfileModel.findByIdAndUpdate(
      req.body._id,
      req.body,
      { new: true }
    );

    if (!profile) {
      return res.status(404).json({ message: 'Profile not found', errorCode: "PROFILE_0002" });
    }

    res.json(profile);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;