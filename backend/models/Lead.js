const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email'],
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    match: [/^[0-9]{10}$/, 'Please enter a valid 10-digit phone number'],
  },
  loanAmount: {
    type: Number,
    required: [true, 'Loan amount is required'],
    min: 100000,
  },
  propertyLocation: {
    type: String,
    enum: ['Hyderabad', 'Sangareddy'],
    required: [true, 'Property location is required'],
  },
  loanType: {
    type: String,
    enum: ['Home Purchase', 'Home Construction', 'Home Improvement', 'Balance Transfer'],
    required: [true, 'Loan type is required'],
  },
  annualIncome: {
    type: Number,
    required: [true, 'Annual income is required'],
  },
  employmentType: {
    type: String,
    enum: ['Salaried', 'Self-Employed', 'Business Owner'],
    required: [true, 'Employment type is required'],
  },
  creditScore: {
    type: String,
    enum: ['Excellent (750+)', 'Good (700-749)', 'Fair (650-699)', 'Poor (<650)', 'Not Sure'],
    default: 'Not Sure',
  },
  message: {
    type: String,
    maxlength: 500,
  },
  status: {
    type: String,
    enum: ['New', 'Contacted', 'Qualified', 'Rejected', 'Converted'],
    default: 'New',
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Lead', leadSchema);
