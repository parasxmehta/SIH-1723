import React from 'react';
import { Link } from 'react-router-dom';
import '../FeaturesPage.css';

const ThreeRollRollingMill = () => {
  return (
    <div className="feature-detail-container">
      <div className="feature-detail-header">
        <Link to="/" className="back-button">Back</Link>
        <div className="feature-detail-icon">🧰</div>
        <h1>3-Roll Rolling Mill</h1>
      </div>
      <div className="feature-detail-content">
        <section className="feature-detail-section">
          <h2>Process Details</h2>
          <p>Stand settings, roll pass schedule, speed, and coolant management.</p>
        </section>
      </div>
    </div>
  );
};

export default ThreeRollRollingMill;