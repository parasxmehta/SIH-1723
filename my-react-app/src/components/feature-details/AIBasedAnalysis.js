import React from 'react';
import { Link } from 'react-router-dom';
import { FaRobot, FaArrowLeft } from 'react-icons/fa';
import '../FeaturesPage.css';

const AIBasedAnalysis = () => {
  return (
    <div className="feature-detail-container">
      <div className="feature-detail-header">
        <Link to="/features" className="back-button">
          <FaArrowLeft /> Back to Features
        </Link>
        <div className="feature-detail-icon">
          <FaRobot />
        </div>
        <h1>AI-Based Analysis</h1>
      </div>
      
      <div className="feature-detail-content">
        <section className="feature-detail-section">
          <h2>Advanced Machine Learning Models</h2>
          <p>
            Our AI-Based Analysis feature leverages state-of-the-art machine learning algorithms 
            specifically trained on aluminum wire rod production data. These models analyze 
            complex relationships between casting parameters and final product properties with 
            unprecedented precision and speed.
          </p>
          <div className="feature-image-container">
            <img src="/ai-analysis.jpg" alt="AI Analysis Visualization" className="feature-image" />
          </div>
        </section>
        
        <section className="feature-detail-section">
          <h2>Key Benefits</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>Predictive Accuracy</h3>
              <p>Achieve up to 95% accuracy in predicting Ultimate Tensile Strength, Elongation, and Conductivity.</p>
            </div>
            <div className="benefit-card">
              <h3>Real-time Processing</h3>
              <p>Get instant analysis results within seconds of submitting your parameters.</p>
            </div>
            <div className="benefit-card">
              <h3>Continuous Learning</h3>
              <p>Our models improve over time as they process more production data.</p>
            </div>
          </div>
        </section>
        
        <section className="feature-detail-section">
          <h2>How It Works</h2>
          <ol className="process-steps">
            <li>
              <span className="step-number">1</span>
              <div className="step-content">
                <h3>Data Input</h3>
                <p>Enter your casting parameters through our intuitive interface.</p>
              </div>
            </li>
            <li>
              <span className="step-number">2</span>
              <div className="step-content">
                <h3>AI Processing</h3>
                <p>Our neural networks analyze your inputs against thousands of historical data points.</p>
              </div>
            </li>
            <li>
              <span className="step-number">3</span>
              <div className="step-content">
                <h3>Results Generation</h3>
                <p>Receive detailed predictions with visualizations and confidence scores.</p>
              </div>
            </li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default AIBasedAnalysis;