import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/form.css';

const LeadFormPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    loanAmount: '',
    propertyLocation: 'Hyderabad',
    loanCategory: 'Home Loan',
    loanType: 'Home Purchase',
    propertyType: 'Residential',
    annualIncome: '',
    employmentType: 'Salaried',
    creditScore: 'Not Sure',
    existingEMI: '0',
    purposeOfLoan: 'Property Purchase',
    message: '',
  });

  const loanTypesByCategory = {
    'Home Loan': [
      { value: 'Home Purchase', label: 'Home Purchase' },
      { value: 'Home Construction', label: 'Home Construction' },
      { value: 'Home Improvement', label: 'Home Improvement' },
      { value: 'Balance Transfer', label: 'Balance Transfer' },
    ],
    'LAP': [
      { value: 'LAP - Residential', label: 'LAP - Residential Property' },
      { value: 'LAP - Commercial', label: 'LAP - Commercial Property' },
      { value: 'LAP - Any Purpose', label: 'LAP - Any Purpose' },
    ],
    'Mortgage Loan': [
      { value: 'Property Mortgage', label: 'Property Mortgage' },
      { value: 'Mortgage Refinance', label: 'Mortgage Refinance' },
    ],
  };

  const purposeOptions = {
    'Home Loan': ['Property Purchase', 'Construction', 'Renovation', 'Debt Consolidation'],
    'LAP': ['Business Needs', 'Education', 'Medical', 'Debt Consolidation', 'Other'],
    'Mortgage Loan': ['Business Needs', 'Debt Consolidation', 'Other'],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedData = {
      ...formData,
      [name]: value,
    };

    // Reset dependent fields when category changes
    if (name === 'loanCategory') {
      updatedData.loanType = loanTypesByCategory[value]?.[0]?.value || '';
      updatedData.purposeOfLoan = purposeOptions[value]?.[0] || '';
    }

    setFormData(updatedData);
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/leads`,
        formData
      );

      if (response.data.success) {
        navigate('/thank-you');
      }
    } catch (err) {
      setError(
        err.response?.data?.message ||
        'Error submitting form. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-page">
      <div className="container">
        <div className="form-container">
          <h1>Get Your Loan Quote</h1>
          <p className="form-subtitle">Fill in your details and we'll connect you with the best lenders</p>

          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleSubmit} className="lead-form">
            <div className="form-section">
              <h2>Personal Information</h2>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="form-group">
                  <label>Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="10-digit mobile number"
                    maxLength="10"
                  />
                </div>
              </div>
            </div>

            <div className="form-section">
              <h2>Loan Requirements</h2>
              <div className="form-row">
                <div className="form-group">
                  <label>Loan Category *</label>
                  <select
                    name="loanCategory"
                    value={formData.loanCategory}
                    onChange={handleChange}
                    required
                  >
                    <option value="Home Loan">Home Loan</option>
                    <option value="LAP">LAP (Loan Against Property)</option>
                    <option value="Mortgage Loan">Mortgage Loan</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Loan Type *</label>
                  <select
                    name="loanType"
                    value={formData.loanType}
                    onChange={handleChange}
                    required
                  >
                    {loanTypesByCategory[formData.loanCategory]?.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Loan Amount Required (₹) *</label>
                  <input
                    type="number"
                    name="loanAmount"
                    value={formData.loanAmount}
                    onChange={handleChange}
                    required
                    placeholder="Minimum ₹1,00,000"
                    min="100000"
                  />
                </div>
                <div className="form-group">
                  <label>Property Location *</label>
                  <select
                    name="propertyLocation"
                    value={formData.propertyLocation}
                    onChange={handleChange}
                    required
                  >
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Sangareddy">Sangareddy</option>
                  </select>
                </div>
              </div>

              {(formData.loanCategory === 'Home Loan' || formData.loanCategory === 'LAP') && (
                <div className="form-row">
                  <div className="form-group">
                    <label>Property Type *</label>
                    <select
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                    >
                      <option value="Residential">Residential</option>
                      <option value="Commercial">Commercial</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Purpose of Loan *</label>
                    <select
                      name="purposeOfLoan"
                      value={formData.purposeOfLoan}
                      onChange={handleChange}
                      required
                    >
                      {purposeOptions[formData.loanCategory]?.map((purpose) => (
                        <option key={purpose} value={purpose}>
                          {purpose}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}
            </div>

            <div className="form-section">
              <h2>Financial Information</h2>
              <div className="form-row">
                <div className="form-group">
                  <label>Annual Income (₹) *</label>
                  <input
                    type="number"
                    name="annualIncome"
                    value={formData.annualIncome}
                    onChange={handleChange}
                    required
                    placeholder="Your annual income"
                  />
                </div>
                <div className="form-group">
                  <label>Employment Type *</label>
                  <select
                    name="employmentType"
                    value={formData.employmentType}
                    onChange={handleChange}
                    required
                  >
                    <option value="Salaried">Salaried</option>
                    <option value="Self-Employed">Self-Employed</option>
                    <option value="Business Owner">Business Owner</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Credit Score</label>
                  <select
                    name="creditScore"
                    value={formData.creditScore}
                    onChange={handleChange}
                  >
                    <option value="Not Sure">Not Sure</option>
                    <option value="Excellent (750+)">Excellent (750+)</option>
                    <option value="Good (700-749)">Good (700-749)</option>
                    <option value="Fair (650-699)">Fair (650-699)</option>
                    <option value="Poor (<650)">Poor (Below 650)</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Existing Monthly EMI (₹)</label>
                  <input
                    type="number"
                    name="existingEMI"
                    value={formData.existingEMI}
                    onChange={handleChange}
                    placeholder="0"
                    min="0"
                  />
                </div>
              </div>
            </div>

            <div className="form-section">
              <div className="form-group full-width">
                <label>Additional Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Any additional information you'd like to share?"
                  maxLength="500"
                  rows="4"
                />
              </div>
            </div>

            <button type="submit" className="btn-submit" disabled={loading}>
              {loading ? 'Submitting...' : 'Get Instant Quote'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LeadFormPage;
