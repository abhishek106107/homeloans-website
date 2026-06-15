import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/thankyou.css';

const ThankYouPage = () => {
  return (
    <div className="thankyou-page">
      <div className="container">
        <div className="thankyou-content">
          <div className="success-icon">✓</div>
          <h1>Thank You!</h1>
          <p className="main-message">
            Your loan application has been submitted successfully!
          </p>
          <div className="info-box">
            <h2>What's Next?</h2>
            <ul>
              <li>✓ Our team will review your application</li>
              <li>✓ We'll contact you within 24-48 hours</li>
              <li>✓ Compare loan offers from multiple lenders</li>
              <li>✓ Get personalized guidance on your options</li>
            </ul>
          </div>
          <p className="contact-info">
            If you have any questions, feel free to contact us at <br />
            📧 support@homeloansekers.com | 📞 +91-XXXXX-XXXXX
          </p>
          <Link to="/" className="btn-home">Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
