import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>Your trusted partner in finding the perfect home loan in Hyderabad and Sangareddy.</p>
          </div>
          <div className="footer-section">
            <h3>Locations</h3>
            <ul>
              <li>Hyderabad</li>
              <li>Sangareddy</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <p>Email: support@homeloansekers.com</p>
            <p>Phone: +91-XXXXX-XXXXX</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 HomeLoan Seekers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
