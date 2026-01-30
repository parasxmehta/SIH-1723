import React from 'react';
import { Link } from 'react-router-dom';
import { MdPrecisionManufacturing } from 'react-icons/md';
import { FaArrowLeft, FaCog, FaIndustry, FaCheckCircle } from 'react-icons/fa';
import '../FeaturesPage.css';

const PrecisionManufacturing = () => {
  return (
    <div className="feature-detail-container">
      <div className="feature-detail-header">
        <Link to="/features" className="back-button">
          <FaArrowLeft /> Back to Features
        </Link>
        <div className="feature-detail-icon">
          <MdPrecisionManufacturing />
        </div>
        <h1>Precision Manufacturing</h1>
      </div>
      
      <div className="feature-detail-content">
        <section className="feature-detail-section">
          <h2>Optimized Casting Parameters</h2>
          <p>
            Our Precision Manufacturing feature enables you to predict and optimize casting parameters 
            for consistent, high-quality aluminum wire rod production. By leveraging advanced predictive 
            models, you can achieve unprecedented control over your manufacturing process and product outcomes.
          </p>
          <div className="feature-image-container">
            <img src="/precision-manufacturing.jpg" alt="Precision Manufacturing Process" className="feature-image" />
          </div>
        </section>
        
        <section className="feature-detail-section">
          <h2>Manufacturing Excellence</h2>
          <div className="manufacturing-features">
            <div className="manufacturing-feature">
              <div className="manufacturing-icon"><FaCog /></div>
              <h3>Parameter Optimization</h3>
              <p>Fine-tune your casting parameters to achieve optimal mechanical properties.</p>
            </div>
            <div className="manufacturing-feature">
              <div className="manufacturing-icon"><FaIndustry /></div>
              <h3>Process Stability</h3>
              <p>Maintain consistent production quality with reduced variability.</p>
            </div>
            <div className="manufacturing-feature">
              <div className="manufacturing-icon"><FaCheckCircle /></div>
              <h3>Quality Assurance</h3>
              <p>Predict product properties before production to ensure quality standards.</p>
            </div>
          </div>
        </section>
        
        <section className="feature-detail-section">
          <h2>Technical Specifications</h2>
          <div className="specs-table-container">
            <table className="specs-table">
              <thead>
                <tr>
                  <th>Property</th>
                  <th>Prediction Accuracy</th>
                  <th>Optimization Capability</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ultimate Tensile Strength</td>
                  <td>±2% accuracy</td>
                  <td>Optimize within 5-10% range</td>
                </tr>
                <tr>
                  <td>Elongation</td>
                  <td>±3% accuracy</td>
                  <td>Optimize within 8-15% range</td>
                </tr>
                <tr>
                  <td>Conductivity</td>
                  <td>±1% accuracy</td>
                  <td>Optimize within 2-5% range</td>
                </tr>
                <tr>
                  <td>Surface Quality</td>
                  <td>90% defect prediction</td>
                  <td>Minimize surface defects by 75%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrecisionManufacturing;