import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>🏠 HomeLoan Seekers</h1>
        </div>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/apply" className="btn-apply">Get Started</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
