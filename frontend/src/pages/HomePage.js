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
            <h1>Find Your Perfect Loan Solution</h1>
            <p>Home Loans • LAP • Mortgage Loans - Get instant quotes from top lenders in Hyderabad and Sangareddy</p>
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

      {/* Loan Products Section */}
      <section className="loan-products">
        <div className="container">
          <h2>Our Loan Products</h2>
          <div className="products-tabs">
            <div className="product-category">
              <h3>🏠 Home Loans</h3>
              <p className="category-desc">Fulfill your dream of owning a home with flexible terms and competitive rates</p>
              <div className="product-cards">
                <div className="product-card">
                  <h4>Home Purchase</h4>
                  <p>Buy your dream property with ease</p>
                  <ul>
                    <li>✓ Up to 90% LTV</li>
                    <li>✓ Flexible tenure up to 30 years</li>
                    <li>✓ Quick approval process</li>
                  </ul>
                </div>
                <div className="product-card">
                  <h4>Home Construction</h4>
                  <p>Build your dream home with our construction loans</p>
                  <ul>
                    <li>✓ Staged disbursement</li>
                    <li>✓ Custom repayment terms</li>
                    <li>✓ Interest only during construction</li>
                  </ul>
                </div>
                <div className="product-card">
                  <h4>Home Improvement</h4>
                  <p>Renovate and upgrade your home</p>
                  <ul>
                    <li>✓ Quick approval</li>
                    <li>✓ Lower processing fees</li>
                    <li>✓ Simple documentation</li>
                  </ul>
                </div>
                <div className="product-card">
                  <h4>Balance Transfer</h4>
                  <p>Transfer and refinance your existing home loan</p>
                  <ul>
                    <li>✓ Lower interest rates</li>
                    <li>✓ Reduced EMI</li>
                    <li>✓ Extended tenure options</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="product-category">
              <h3>💼 LAP (Loan Against Property)</h3>
              <p className="category-desc">Unlock the value of your property for any financial need</p>
              <div className="product-cards">
                <div className="product-card">
                  <h4>Residential LAP</h4>
                  <p>Leverage your residential property</p>
                  <ul>
                    <li>✓ Up to 50% LTV</li>
                    <li>✓ Flexible tenure</li>
                    <li>✓ Fast disbursement</li>
                  </ul>
                </div>
                <div className="product-card">
                  <h4>Commercial LAP</h4>
                  <p>Business loans against commercial property</p>
                  <ul>
                    <li>✓ Higher loan amount</li>
                    <li>✓ Business-friendly terms</li>
                    <li>✓ Competitive rates</li>
                  </ul>
                </div>
                <div className="product-card">
                  <h4>LAP - Any Purpose</h4>
                  <p>Borrow for any financial requirement</p>
                  <ul>
                    <li>✓ Education</li>
                    <li>✓ Medical emergencies</li>
                    <li>✓ Business expansion</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="product-category">
              <h3>🏦 Mortgage Loans</h3>
              <p className="category-desc">Flexible financing options backed by property mortgages</p>
              <div className="product-cards">
                <div className="product-card">
                  <h4>Property Mortgage</h4>
                  <p>Mortgage your property for business needs</p>
                  <ul>
                    <li>✓ Flexible amounts</li>
                    <li>✓ Quick processing</li>
                    <li>✓ Business-oriented terms</li>
                  </ul>
                </div>
                <div className="product-card">
                  <h4>Mortgage Refinance</h4>
                  <p>Refinance your existing mortgage loan</p>
                  <ul>
                    <li>✓ Lower interest rates</li>
                    <li>✓ Flexible repayment</li>
                    <li>✓ Extended tenure</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="eligibility">
        <div className="container">
          <h2>Quick Eligibility Check</h2>
          <div className="eligibility-grid">
            <div className="eligibility-item">
              <h4>Age</h4>
              <p>18 - 70 years</p>
            </div>
            <div className="eligibility-item">
              <h4>Income</h4>
              <p>₹2,00,000+ annual</p>
            </div>
            <div className="eligibility-item">
              <h4>Employment</h4>
              <p>Salaried/Self-employed</p>
            </div>
            <div className="eligibility-item">
              <h4>Credit Score</h4>
              <p>650+ (ideal)</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Get Your Loan?</h2>
          <p>Fill out our simple form and our experts will contact you with the best offers for your financial needs</p>
          <Link to="/apply" className="btn-cta-large">Start Your Application</Link>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
