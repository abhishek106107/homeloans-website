const express = require('express');
const router = express.Router();
const Lead = require('../models/Lead');
const User = require('../models/User');

// Dashboard stats
router.get('/stats', async (req, res) => {
  try {
    const totalLeads = await Lead.countDocuments();
    const newLeads = await Lead.countDocuments({ status: 'New' });
    const convertedLeads = await Lead.countDocuments({ status: 'Converted' });
    const hyderabadLeads = await Lead.countDocuments({ propertyLocation: 'Hyderabad' });
    const sangaredyLeads = await Lead.countDocuments({ propertyLocation: 'Sangareddy' });

    res.json({
      success: true,
      data: {
        totalLeads,
        newLeads,
        convertedLeads,
        hyderabadLeads,
        sangaredyLeads,
        conversionRate: ((convertedLeads / totalLeads) * 100).toFixed(2) + '%',
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
