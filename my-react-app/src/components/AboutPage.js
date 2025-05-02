import React, { useState, useEffect } from 'react';
import './AboutPage.css'; // Import the CSS

const AboutPage = () => {
  const [visitCount, setVisitCount] = useState(0);
  const [lastVisit, setLastVisit] = useState(null);

  useEffect(() => {
    // Get stored visit data from localStorage
    const storedVisitCount = parseInt(localStorage.getItem('aboutPageVisits') || '0');
    const storedLastVisit = localStorage.getItem('aboutPageLastVisit');
    
    // Check if this is a new session
    const currentDate = new Date().toISOString();
    const lastSessionDate = sessionStorage.getItem('lastAboutPageVisit');
    
    // Only increment if this is a new session
    if (!lastSessionDate) {
      // Update visit count
      const newVisitCount = storedVisitCount + 1;
      setVisitCount(newVisitCount);
      localStorage.setItem('aboutPageVisits', newVisitCount.toString());
      
      // Mark this session
      sessionStorage.setItem('lastAboutPageVisit', currentDate);
    } else {
      // Just display the current count without incrementing
      setVisitCount(storedVisitCount);
    }
    
    // Update last visit timestamp
    setLastVisit(storedLastVisit);
    localStorage.setItem('aboutPageLastVisit', currentDate);
  }, []);

  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>About the Website</h1>
        <p>
          This AI-powered system predicts the physical properties of aluminum wire rods—
          including Ultimate Tensile Strength, Elongation, and Conductivity—based on key
          casting parameters. It enables manufacturers to optimize processes, reduce
          experimental costs, and improve product quality.
        </p>
      </section>

      <section className="about-section">
        <h2>Objective</h2>
        <p>
          The primary goal of this website is to leverage machine learning models to forecast
          wire rod properties in real-time, enabling intelligent control over the production
          process. This predictive approach enhances efficiency, accuracy, and cost-effectiveness.
        </p>
      </section>

      <section className="about-section">
        <h2>How It Works</h2>
        <ul>
          <li>Input parameters like Casting Temperature, Rolling Speed, and Cooling Rate</li>
          <li>Backed by trained machine learning models</li>
          <li>Predicts UTS, Elongation, and Conductivity instantly</li>
        </ul>
      </section>

      {visitCount > 0 && (
        <section className="about-section dynamic-content">
          <h2>Your Interaction</h2>
          <p>
            Welcome back! Thank you for visiting this site <strong>{visitCount} {visitCount === 1 ? 'time' : 'times'}</strong>.
            {lastVisit && (
              <span> Your last visit was on {new Date(lastVisit).toLocaleDateString()} at {new Date(lastVisit).toLocaleTimeString()}.</span>
            )}
          </p>
          <p>
            We're constantly improving our prediction algorithms to provide you with the most accurate results.
            Check back regularly for updates and new features!
          </p>
        </section>
      )}

      <section className="about-footer">
        <p>Developed by Paras Mehta, CSE (2026), for industrial optimization and process control.</p>
      </section>
    </div>
  );
};

export default AboutPage;
