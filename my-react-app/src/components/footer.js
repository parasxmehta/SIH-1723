// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Wire Rod Predictor</h4>
          <p>Advanced AI solutions for aluminum wire rod production optimization</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: parasmehta1524@gmail.com</p>
          <p>Phone: +91 93154 23456</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Wire Rod Predictor. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;