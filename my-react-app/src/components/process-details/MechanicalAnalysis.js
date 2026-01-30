import React from 'react';
import { Link } from 'react-router-dom';
import '../FeaturesPage.css';

const MechanicalAnalysis = () => {
  return (
    <div className="feature-detail-container">
      <div className="feature-detail-header">
        <Link to="/" className="back-button">Back</Link>
        <div className="feature-detail-icon">🔩</div>
        <h1>Mechanical Analysis</h1>
      </div>
      <div className="feature-detail-content">
        <section className="feature-detail-section">
          <h2>Process Details</h2>
          <p>UTS, elongation, sampling, and test standard references.</p>
        </section>
      </div>
    </div>
  );
};

export default MechanicalAnalysis;