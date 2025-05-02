// src/components/LandingPage.js
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import Footer from './footer';
import './LandingPage.css';

const LandingPage = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (isAuthenticated) {
      navigate('/main');
    } else {
      loginWithRedirect();
    }
  };

  return (
    <div className="landing-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Wire Rod Predictor</h1>
          <p className="hero-subtitle">
          "Revolutionize aluminum wire rod production with Intelligent AI and Machine Learning for monitoring, predicting, and fine-tuning key parameters for unmatched quality and efficiency."
          </p>
          <button className="cta-button" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
      </div>

      {/* Process Buttons Section */}
      <div className="process-buttons-section">
        <h2>ALUMINIUM MANUFACTURING PROCESS</h2>
        <p className="process-subtitle">EXPLORE OUR INDUSTRIAL PRODUCTION WORKFLOW</p>
        <div className="process-buttons-grid">
          <button className="process-button">
            <div className="process-button-icon">
              <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 70H80L70 30H30L20 70Z" stroke="white" strokeWidth="3" fill="none"/>
                <circle cx="35" cy="75" r="10" stroke="white" strokeWidth="3" fill="none"/>
                <circle cx="65" cy="75" r="10" stroke="white" strokeWidth="3" fill="none"/>
                <path d="M40 50H60" stroke="white" strokeWidth="3"/>
              </svg>
            </div>
            AGGLOMERATION
          </button>
          <button className="process-button">
            <div className="process-button-icon">
              <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 20V80" stroke="white" strokeWidth="3"/>
                <path d="M60 20V80" stroke="white" strokeWidth="3"/>
                <path d="M30 30C30 30 40 40 50 30C60 20 70 30 70 30" stroke="white" strokeWidth="3" fill="none"/>
                <path d="M30 70C30 70 40 60 50 70C60 80 70 70 70 70" stroke="white" strokeWidth="3" fill="none"/>
              </svg>
            </div>
            MAKING
          </button>
          <button className="process-button">
            <div className="process-button-icon">
              <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 30C30 30 50 30 50 50C50 70 70 70 70 70" stroke="white" strokeWidth="3" fill="none"/>
                <path d="M30 70C30 70 50 70 50 50C50 30 70 30 70 30" stroke="white" strokeWidth="3" fill="none"/>
              </svg>
            </div>
            ALLOY MAKING
          </button>
          <button className="process-button">
            <div className="process-button-icon">
              <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 40H80" stroke="white" strokeWidth="3"/>
                <circle cx="30" cy="40" r="5" stroke="white" strokeWidth="3" fill="white"/>
                <circle cx="50" cy="40" r="5" stroke="white" strokeWidth="3" fill="white"/>
                <circle cx="70" cy="40" r="5" stroke="white" strokeWidth="3" fill="white"/>
                <path d="M20 60H80" stroke="white" strokeWidth="3"/>
                <circle cx="30" cy="60" r="5" stroke="white" strokeWidth="3" fill="white"/>
                <circle cx="50" cy="60" r="5" stroke="white" strokeWidth="3" fill="white"/>
                <circle cx="70" cy="60" r="5" stroke="white" strokeWidth="3" fill="white"/>
              </svg>
            </div>
            CONTINUOUS CASTING
          </button>
          <button className="process-button">
            <div className="process-button-icon">
              <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="30" stroke="white" strokeWidth="3" fill="none"/>
                <circle cx="50" cy="50" r="25" stroke="white" strokeWidth="2" fill="none"/>
                <circle cx="50" cy="50" r="20" stroke="white" strokeWidth="2" fill="none"/>
                <circle cx="50" cy="50" r="15" stroke="white" strokeWidth="2" fill="none"/>
                <circle cx="50" cy="50" r="10" stroke="white" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            HOT ROLLING LONG
          </button>
          <button className="process-button">
            <div className="process-button-icon">
              <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="30" stroke="white" strokeWidth="3" fill="none"/>
                <circle cx="50" cy="50" r="20" stroke="white" strokeWidth="3" fill="none"/>
                <circle cx="50" cy="50" r="10" stroke="white" strokeWidth="3" fill="none"/>
              </svg>
            </div>
            HOT ROLLING FLAT
          </button>
          <button className="process-button">
            <div className="process-button-icon">
              <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="30" stroke="white" strokeWidth="3" fill="none"/>
                <circle cx="50" cy="50" r="25" stroke="white" strokeWidth="2" fill="none"/>
                <circle cx="50" cy="50" r="20" stroke="white" strokeWidth="2" fill="none"/>
                <circle cx="50" cy="50" r="15" stroke="white" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            COLD ROLLING
          </button>
          <button className="process-button">
            <div className="process-button-icon">
              <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="30" cy="50" r="15" stroke="white" strokeWidth="3" fill="none"/>
                <circle cx="70" cy="50" r="15" stroke="white" strokeWidth="3" fill="none"/>
                <rect x="40" y="30" width="20" height="40" stroke="white" strokeWidth="3" fill="none"/>
                <line x1="50" y1="30" x2="50" y2="70" stroke="white" strokeWidth="3"/>
              </svg>
            </div>
            NON FERROUS ROLLING
          </button>
          <button className="process-button">
            <div className="process-button-icon">
              <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="30" y1="20" x2="30" y2="80" stroke="white" strokeWidth="3"/>
                <line x1="45" y1="20" x2="45" y2="80" stroke="white" strokeWidth="3"/>
                <line x1="60" y1="20" x2="60" y2="80" stroke="white" strokeWidth="3"/>
                <line x1="75" y1="20" x2="75" y2="80" stroke="white" strokeWidth="3"/>
              </svg>
            </div>
            PROCESSING
          </button>
          <button className="process-button">
            <div className="process-button-icon">
              <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 40H80" stroke="white" strokeWidth="3"/>
                <circle cx="30" cy="40" r="5" stroke="white" strokeWidth="3" fill="white"/>
                <circle cx="50" cy="40" r="5" stroke="white" strokeWidth="3" fill="white"/>
                <circle cx="70" cy="40" r="5" stroke="white" strokeWidth="3" fill="white"/>
                <path d="M20 60H80" stroke="white" strokeWidth="3"/>
                <rect x="40" y="50" width="20" height="20" stroke="white" strokeWidth="3" fill="none"/>
              </svg>
            </div>
            ENDLESS CASTING & ROLLING
          </button>
          <button className="process-button">
            <div className="process-button-icon">
              <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 30H70V70H30V30Z" stroke="white" strokeWidth="3" fill="none"/>
                <path d="M20 40H30" stroke="white" strokeWidth="3"/>
                <path d="M20 60H30" stroke="white" strokeWidth="3"/>
                <path d="M70 40H80" stroke="white" strokeWidth="3"/>
                <path d="M70 60H80" stroke="white" strokeWidth="3"/>
              </svg>
            </div>
            MINI MILLS
          </button>
          <button className="process-button">
            <div className="process-button-icon">
              <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="30" y="30" width="40" height="40" stroke="white" strokeWidth="3" fill="none"/>
                <path d="M30 50H70" stroke="white" strokeWidth="3"/>
                <path d="M50 30V70" stroke="white" strokeWidth="3"/>
              </svg>
            </div>
            QUALITY CONTROL
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h2>Optimize Your Production Process</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Predictive Analysis</h3>
            <p>Accurately predict wire rod properties based on process parameters</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚙️</div>
            <h3>Parameter Optimization</h3>
            <p>Control key variables to achieve desired UTS, elongation and conductivity</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3>Real-time Monitoring</h3>
            <p>Track critical casting and rolling parameters throughout production</p>
          </div>
        </div>
      </div>

      {/* Process Description */}
      <div className="process-section">
        <h2>Advanced Wire Rod Production Analysis</h2>
        <div className="process-content">
          <div className="process-text">
            <p>
              Our AI-powered system analyzes the complete aluminum wire rod production process, 
              from initial casting of 3437 sq. mm trapezoidal bars through 15 rolling stands 
              to the final 9.5 mm diameter rod.
            </p>
            <p>
              By monitoring and optimizing key parameters including chemical composition, 
              casting temperature, cooling water conditions, rolling mill settings, and 
              emulsion variables, we help you maintain consistent quality and 
              achieve your target specifications.
            </p>
            <button className="secondary-button" onClick={handleGetStarted}>
              Learn More
            </button>
          </div>
          <div className="process-image">
            {/* Placeholder for a production line image */}
            <div className="placeholder-image"></div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <h2>Ready to Optimize Your Wire Rod Production?</h2>
        <p>
          Join manufacturing leaders who are using AI to improve quality and consistency
        </p>
        <button className="cta-button large" onClick={handleGetStarted}>
          Get Started Today
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;