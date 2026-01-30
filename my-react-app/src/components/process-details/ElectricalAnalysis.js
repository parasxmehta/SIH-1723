import React from 'react';
import { Link } from 'react-router-dom';
import '../FeaturesPage.css';

const ElectricalAnalysis = () => {
  return (
    <div className="feature-detail-container">
      <div className="feature-detail-header">
        <Link to="/" className="back-button">Back</Link>
        <div className="feature-detail-icon">⚡</div>
        <h1>Electrical Analysis</h1>
      </div>
      <div className="feature-detail-content">
        <section className="feature-detail-section">
          <h2>Process Details</h2>
          <p>Conductivity measurement, IACS targets, and test methodology.</p>
        </section>
      </div>
    </div>
  );
};

export default ElectricalAnalysis;