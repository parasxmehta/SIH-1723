import React from 'react';
import { Link } from 'react-router-dom';
import '../FeaturesPage.css';

const IngotProcurement = () => {
  return (
    <div className="feature-detail-container">
      <div className="feature-detail-header">
        <Link to="/" className="back-button">Back</Link>
        <div className="feature-detail-icon">🏭</div>
        <h1>Aluminium Ingot Procurement</h1>
      </div>
      <div className="feature-detail-content">
        <section className="feature-detail-section">
          <h2>Overview</h2>
          <p>Procurement criteria, supplier quality, certifications, and incoming inspection protocols.</p>
        </section>
      </div>
    </div>
  );
};

export default IngotProcurement;