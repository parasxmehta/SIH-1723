import React from 'react';
import { Link } from 'react-router-dom';
import { FaChartLine, FaArrowLeft, FaDesktop, FaMobileAlt, FaBell } from 'react-icons/fa';
import '../FeaturesPage.css';

const LiveMonitoring = () => {
  return (
    <div className="feature-detail-container">
      <div className="feature-detail-header">
        <Link to="/features" className="back-button">
          <FaArrowLeft /> Back to Features
        </Link>
        <div className="feature-detail-icon">
          <FaChartLine />
        </div>
        <h1>Live Monitoring</h1>
      </div>
      
      <div className="feature-detail-content">
        <section className="feature-detail-section">
          <h2>Real-Time Visual Insights</h2>
          <p>
            Our Live Monitoring feature provides comprehensive real-time visualization of your 
            production data. Watch as sensor readings, quality metrics, and production statistics 
            update in real-time, giving you immediate visibility into your manufacturing process.
          </p>
          <div className="feature-image-container">
            <img src="/live-monitoring.jpg" alt="Live Monitoring Dashboard" className="feature-image" />
          </div>
        </section>
        
        <section className="feature-detail-section">
          <h2>Monitoring Features</h2>
          <div className="monitoring-features">
            <div className="monitoring-feature">
              <div className="monitoring-icon"><FaDesktop /></div>
              <h3>Interactive Dashboards</h3>
              <p>Customizable dashboards with drag-and-drop widgets for your most important metrics.</p>
            </div>
            <div className="monitoring-feature">
              <div className="monitoring-icon"><FaMobileAlt /></div>
              <h3>Mobile Accessibility</h3>
              <p>Monitor your production from anywhere with our responsive mobile interface.</p>
            </div>
            <div className="monitoring-feature">
              <div className="monitoring-icon"><FaBell /></div>
              <h3>Intelligent Alerts</h3>
              <p>Receive notifications when parameters drift outside optimal ranges.</p>
            </div>
          </div>
        </section>
        
        <section className="feature-detail-section">
          <h2>Visualization Types</h2>
          <div className="visualization-types">
            <div className="visualization-type">
              <h3>Time Series Charts</h3>
              <p>Track parameter changes over time with interactive zoom and pan capabilities.</p>
            </div>
            <div className="visualization-type">
              <h3>Statistical Distribution</h3>
              <p>Understand your production variability with histograms and distribution plots.</p>
            </div>
            <div className="visualization-type">
              <h3>Correlation Maps</h3>
              <p>Identify relationships between different parameters and quality metrics.</p>
            </div>
            <div className="visualization-type">
              <h3>Process Flow Diagrams</h3>
              <p>Visualize your entire production process with real-time status indicators.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LiveMonitoring;