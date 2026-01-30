import React from 'react';
import { FaRobot, FaMagic, FaLock, FaChartLine } from 'react-icons/fa';
import { MdPrecisionManufacturing } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import './FeaturesPage.css';

const features = [
  {
    icon: <FaRobot />,
    title: 'AI-Based Analysis',
    desc: 'Advanced ML models to analyze wire rod properties with precision and speed.',
    path: '/features/ai-analysis'
  },
  {
    icon: <FaMagic />,
    title: 'Smart Recommendations',
    desc: 'Instant, data-driven suggestions to enhance production settings.',
    path: '/features/smart-recommendations'
  },
  {
    icon: <FaLock />,
    title: 'Secure Access',
    desc: 'Top-notch authentication to ensure data protection and privacy.',
    path: '/features/secure-access'
  },
  {
    icon: <FaChartLine />,
    title: 'Live Monitoring',
    desc: 'Real-time visual insights from sensors and production stats.',
    path: '/features/live-monitoring'
  },
  {
    icon: <MdPrecisionManufacturing />,
    title: 'Precision Manufacturing',
    desc: 'Predict and optimize casting parameters for consistent quality output.',
    path: '/features/precision-manufacturing'
  },
];

const Features = () => {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className="features-container">
      <div className="features-header">
        <h2 className="features-title">Features</h2>
        <p className="features-subtitle">
          Revolutionizing wire rod production with cutting-edge AI for smarter, faster, and more secure operations.
        </p>
      </div>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="feature-card" 
            onClick={() => handleCardClick(feature.path)}
            style={{ cursor: 'pointer' }}
          >
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
