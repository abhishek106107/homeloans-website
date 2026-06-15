import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

const HomePage = () => {
  return (
    <main className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Find Your Dream Home Loan</h1>
            <p>Get instant loan quotes from top lenders in Hyderabad and Sangareddy</p>
            <Link to="/apply" className="btn-cta">Apply Now - It's Free!</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2>Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="icon">⚡</div>
              <h3>Quick Process</h3>
              <p>Get loan approvals in just 48 hours</p>
            </div>
            <div className="feature-card">
              <div className="icon">💰</div>
              <h3>Best Rates</h3>
              <p>Compare rates from multiple lenders</p>
            </div>
            <div className="feature-card">
              <div className="icon">🛡️</div>
              <h3>Secure & Safe</h3>
              <p>Your data is 100% secure with us</p>
            </div>
            <div className="feature-card">
              <div className="icon">👥</div>
              <h3>Expert Support</h3>
              <p>Get guidance from our loan experts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Types Section */}
      <section className="loan-types">
        <div className="container">
          <h2>Our Loan Products</h2>
          <div className="loan-grid">
            <div className="loan-card">
              <h3>Home Purchase</h3>
              <p>Loans for buying a new home</p>
              <ul>
                <li>Up to 90% LTV</li>
                <li>Flexible tenure</li>
                <li>Low interest rates</li>
              </ul>
            </div>
            <div className="loan-card">
              <h3>Home Construction</h3>
              <p>Loans for building your dream home</p>
              <ul>
                <li>Staged disbursement</li>
                <li>Custom tenure</li>
                <li>Competitive rates</li>
              </ul>
            </div>
            <div className="loan-card">
              <h3>Home Improvement</h3>
              <p>Loans for home renovation</p>
              <ul>
                <li>Quick approval</li>
                <li>Lower amounts</li>
                <li>Easy process</li>
              </ul>
            </div>
            <div className="loan-card">
              <h3>Balance Transfer</h3>
              <p>Refinance your existing loan</p>
              <ul>
                <li>Lower rates</li>
                <li>Reduce EMI</li>
                <li>Extended tenure</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Get Your Home Loan?</h2>
          <p>Fill out our simple form and our experts will contact you with the best offers</p>
          <Link to="/apply" className="btn-cta-large">Start Your Application</Link>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
