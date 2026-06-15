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
    loanType: 'Home Purchase',
    annualIncome: '',
    employmentType: 'Salaried',
    creditScore: 'Not Sure',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
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
          <h1>Get Your Home Loan Quote</h1>
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

              <div className="form-row">
                <div className="form-group">
                  <label>Loan Type *</label>
                  <select
                    name="loanType"
                    value={formData.loanType}
                    onChange={handleChange}
                    required
                  >
                    <option value="Home Purchase">Home Purchase</option>
                    <option value="Home Construction">Home Construction</option>
                    <option value="Home Improvement">Home Improvement</option>
                    <option value="Balance Transfer">Balance Transfer</option>
                  </select>
                </div>
              </div>
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
