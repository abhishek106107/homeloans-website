const express = require('express');
const router = express.Router();
const Lead = require('../models/Lead');
const { body, validationResult } = require('express-validator');

// Validation middleware
const validateLead = [
  body('firstName').trim().notEmpty().withMessage('First name is required'),
  body('lastName').trim().notEmpty().withMessage('Last name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('phone').matches(/^[0-9]{10}$/).withMessage('Valid 10-digit phone is required'),
  body('loanAmount').isInt({ min: 100000 }).withMessage('Loan amount must be at least 1,00,000'),
  body('propertyLocation').isIn(['Hyderabad', 'Sangareddy']).withMessage('Select valid location'),
  body('loanType').notEmpty().withMessage('Loan type is required'),
  body('annualIncome').isInt({ min: 0 }).withMessage('Annual income is required'),
  body('employmentType').isIn(['Salaried', 'Self-Employed', 'Business Owner']).withMessage('Select employment type'),
];

// POST - Submit a new lead
router.post('/', validateLead, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const lead = new Lead(req.body);
    await lead.save();

    // TODO: Send email notification to admin
    console.log('New lead received:', lead);

    res.status(201).json({
      success: true,
      message: 'Lead submitted successfully. We will contact you soon!',
      leadId: lead._id,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET - Get all leads (Protected route for agents/admin)
router.get('/', async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.json({ success: true, count: leads.length, data: leads });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET - Get lead by ID
router.get('/:id', async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);
    if (!lead) return res.status(404).json({ success: false, message: 'Lead not found' });
    res.json({ success: true, data: lead });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// PUT - Update lead status
router.put('/:id', async (req, res) => {
  try {
    const lead = await Lead.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status, updatedAt: new Date() },
      { new: true, runValidators: true }
    );
    if (!lead) return res.status(404).json({ success: false, message: 'Lead not found' });
    res.json({ success: true, message: 'Lead updated', data: lead });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
