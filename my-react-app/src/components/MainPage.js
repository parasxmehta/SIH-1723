import React, { useState } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import './mainpage.css'; // Ensure this file exists in the same folder

const MainPage = () => {
  const { user, isAuthenticated } = useAuth0();
  const [inputs, setInputs] = useState({
    casting_temp: '',
    rolling_speed: '',
    cooling_rate: ''
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  };

  const handlePredict = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await axios.post('http://127.0.0.1:5000/predict', {
        casting_temp: parseFloat(inputs.casting_temp),
        rolling_speed: parseFloat(inputs.rolling_speed),
        cooling_rate: parseFloat(inputs.cooling_rate)
      });
      setResult(response.data);
      
      // Increment prediction count in localStorage if user is authenticated
      if (isAuthenticated && user && user.sub) {
        const currentCount = parseInt(localStorage.getItem(`predictions_count_${user.sub}`) || '0');
        localStorage.setItem(`predictions_count_${user.sub}`, (currentCount + 1).toString());
      }
    } catch (err) {
      console.error(err);
      setError('Prediction failed. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="main-page">
      <div className="prediction-container">
        <div className="card">
          <div className="card-header">
            <h2>Predict Wire Rod Properties</h2>
            <p className="subtitle">Enter manufacturing parameters to predict final rod characteristics</p>
          </div>

          <form onSubmit={handlePredict} className="prediction-form">
            <div className="input-group">
              <label htmlFor="casting_temp">Casting Temperature (°C)</label>
              <div className="input-wrapper">
                <input
                  type="number"
                  id="casting_temp"
                  name="casting_temp"
                  value={inputs.casting_temp}
                  onChange={handleChange}
                  placeholder="e.g. 720"
                  required
                />
                <span className="unit-indicator">°C</span>
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="rolling_speed">Rolling Speed (m/min)</label>
              <div className="input-wrapper">
                <input
                  type="number"
                  id="rolling_speed"
                  name="rolling_speed"
                  value={inputs.rolling_speed}
                  onChange={handleChange}
                  placeholder="e.g. 15"
                  required
                />
                <span className="unit-indicator">m/min</span>
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="cooling_rate">Cooling Rate (°C/s)</label>
              <div className="input-wrapper">
                <input
                  type="number"
                  id="cooling_rate"
                  name="cooling_rate"
                  value={inputs.cooling_rate}
                  onChange={handleChange}
                  placeholder="e.g. 5"
                  required
                />
                <span className="unit-indicator">°C/s</span>
              </div>
            </div>

            <button type="submit" className="predict-button" disabled={loading}>
              {loading ? (
                <>
                  <div className="spinner"></div>
                  <span>Processing...</span>
                </>
              ) : (
                'Generate Prediction'
              )}
            </button>
          </form>

          {error && (
            <div className="error-message">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              <p>{error}</p>
            </div>
          )}
        </div>

        {result && (
          <div className="results-card">
            <div className="results-header">
              <h3>Prediction Results</h3>
              <p className="results-subtitle">Based on your input parameters</p>
            </div>

            <div className="results-horizontal">
              <div className="result-item">
                <div className="result-label">Ultimate Tensile Strength</div>
                <div className="result-value">
                  {result.uts} <span className="result-unit">MPa</span>
                </div>
              </div>

              <div className="result-item">
                <div className="result-label">Elongation</div>
                <div className="result-value">
                  {result.elongation} <span className="result-unit">%</span>
                </div>
              </div>

              <div className="result-item">
                <div className="result-label">Conductivity</div>
                <div className="result-value">
                  {result.conductivity} <span className="result-unit">IACS</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainPage;
