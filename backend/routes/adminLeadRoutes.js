const express = require('express');
const router = express.Router();
const Lead = require('../models/Lead');
const { verifyToken, verifyAdmin } = require('../middleware/auth');

// GET all leads (admin only)
router.get('/', verifyToken, verifyAdmin, async (req, res) => {
  try {
    const { status, loanCategory, sortBy = 'createdAt' } = req.query;
    
    let filter = {};
    if (status) filter.status = status;
    if (loanCategory) filter.loanCategory = loanCategory;

    const leads = await Lead.find(filter)
      .sort({ [sortBy]: -1 })
      .limit(100);

    res.json({ success: true, count: leads.length, data: leads });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET dashboard stats (admin only)
router.get('/stats/overview', verifyToken, verifyAdmin, async (req, res) => {
  try {
    const totalLeads = await Lead.countDocuments();
    const newLeads = await Lead.countDocuments({ status: 'New' });
    const contactedLeads = await Lead.countDocuments({ status: 'Contacted' });
    const qualifiedLeads = await Lead.countDocuments({ status: 'Qualified' });
    const convertedLeads = await Lead.countDocuments({ status: 'Converted' });
    
    const hyderabadLeads = await Lead.countDocuments({ propertyLocation: 'Hyderabad' });
    const sangaredyLeads = await Lead.countDocuments({ propertyLocation: 'Sangareddy' });

    const homeLoans = await Lead.countDocuments({ loanCategory: 'Home Loan' });
    const lapLoans = await Lead.countDocuments({ loanCategory: 'LAP' });
    const mortgageLoans = await Lead.countDocuments({ loanCategory: 'Mortgage Loan' });

    const totalLoanAmount = await Lead.aggregate([
      { $group: { _id: null, total: { $sum: '$loanAmount' } } }
    ]);

    const conversionRate = totalLeads > 0 ? ((convertedLeads / totalLeads) * 100).toFixed(2) : 0;

    res.json({
      success: true,
      data: {
        totalLeads,
        newLeads,
        contactedLeads,
        qualifiedLeads,
        convertedLeads,
        conversionRate: `${conversionRate}%`,
        locations: {
          hyderabad: hyderabadLeads,
          sangareddy: sangaredyLeads,
        },
        loanCategories: {
          homeLoans,
          lapLoans,
          mortgageLoans,
        },
        totalLoanAmount: totalLoanAmount[0]?.total || 0,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET lead by ID (admin only)
router.get('/:id', verifyToken, verifyAdmin, async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);
    if (!lead) {
      return res.status(404).json({ success: false, message: 'Lead not found' });
    }
    res.json({ success: true, data: lead });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// PUT update lead status (admin only)
router.put('/:id/status', verifyToken, verifyAdmin, async (req, res) => {
  try {
    const { status, message } = req.body;

    if (!['New', 'Contacted', 'Qualified', 'Rejected', 'Converted'].includes(status)) {
      return res.status(400).json({ success: false, message: 'Invalid status' });
    }

    const lead = await Lead.findByIdAndUpdate(
      req.params.id,
      {
        status,
        message: message || lead.message,
        updatedAt: new Date(),
      },
      { new: true, runValidators: true }
    );

    if (!lead) {
      return res.status(404).json({ success: false, message: 'Lead not found' });
    }

    res.json({ success: true, message: 'Lead updated successfully', data: lead });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// PUT assign lead to agent (admin only)
router.put('/:id/assign', verifyToken, verifyAdmin, async (req, res) => {
  try {
    const { assignedTo } = req.body;

    const lead = await Lead.findByIdAndUpdate(
      req.params.id,
      { assignedTo, updatedAt: new Date() },
      { new: true, runValidators: true }
    );

    if (!lead) {
      return res.status(404).json({ success: false, message: 'Lead not found' });
    }

    res.json({ success: true, message: 'Lead assigned successfully', data: lead });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// DELETE lead (admin only)
router.delete('/:id', verifyToken, verifyAdmin, async (req, res) => {
  try {
    const lead = await Lead.findByIdAndDelete(req.params.id);
    
    if (!lead) {
      return res.status(404).json({ success: false, message: 'Lead not found' });
    }

    res.json({ success: true, message: 'Lead deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET leads by status filter
router.get('/filter/by-status', verifyToken, verifyAdmin, async (req, res) => {
  try {
    const leads = await Lead.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 },
          leads: { $push: '$$ROOT' }
        }
      }
    ]);

    res.json({ success: true, data: leads });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
