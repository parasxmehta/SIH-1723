import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './ReportPage.css';

const ReportPage = () => {
  const { user, isAuthenticated } = useAuth0();
  const [predictions, setPredictions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real application, you would fetch this data from a backend API
    // For this demo, we'll simulate prediction history from localStorage
    if (isAuthenticated && user) {
      // Simulate loading data
      setTimeout(() => {
        const simulatedData = generateSimulatedData();
        setPredictions(simulatedData);
        setLoading(false);
      }, 1000);
    }
  }, [isAuthenticated, user]);

  const generateSimulatedData = () => {
    // Generate some sample prediction data
    // In a real app, this would come from your backend
    const sampleData = [];
    const count = Math.floor(Math.random() * 10) + 5; // 5-15 predictions
    
    for (let i = 0; i < count; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i); // Each prediction is a day apart
      
      sampleData.push({
        id: i + 1,
        date: date.toISOString().split('T')[0],
        casting_temp: Math.floor(Math.random() * 100) + 650, // 650-750°C
        rolling_speed: Math.floor(Math.random() * 20) + 10, // 10-30 m/min
        cooling_rate: Math.floor(Math.random() * 10) + 5, // 5-15 °C/s
        conductivity: (Math.random() * 10 + 50).toFixed(2), // 50-60 IACS%
        elongation: (Math.random() * 15 + 10).toFixed(2), // 10-25%
        uts: Math.floor(Math.random() * 100) + 150 // 150-250 MPa
      });
    }
    
    return sampleData;
  };

  const downloadCSV = () => {
    if (predictions.length === 0) return;
    
    // Create CSV content
    const headers = ['ID', 'Date', 'Casting Temp (°C)', 'Rolling Speed (m/min)', 
                    'Cooling Rate (°C/s)', 'Conductivity (IACS%)', 'Elongation (%)', 'UTS (MPa)'];
    
    let csvContent = headers.join(',') + '\n';
    
    predictions.forEach(pred => {
      const row = [
        pred.id,
        pred.date,
        pred.casting_temp,
        pred.rolling_speed,
        pred.cooling_rate,
        pred.conductivity,
        pred.elongation,
        pred.uts
      ];
      csvContent += row.join(',') + '\n';
    });
    
    // Create and download the file
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `prediction_history_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isAuthenticated) {
    return (
      <div className="report-page">
        <div className="report-container">
          <div className="card">
            <div className="card-header">
              <h2>Please log in to view your prediction history</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="report-page">
      <div className="report-container">
        <div className="card">
          <div className="card-header">
            <h2>Your Prediction History</h2>
            <p className="subtitle">View and download your past predictions</p>
          </div>
          
          <div className="report-content">
            {loading ? (
              <div className="loading-message">Loading your prediction history...</div>
            ) : predictions.length > 0 ? (
              <>
                <div className="report-actions">
                  <button onClick={downloadCSV} className="download-button">
                    Download as CSV
                  </button>
                </div>
                
                <div className="table-container">
                  <table className="prediction-table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Date</th>
                        <th>Casting Temp (°C)</th>
                        <th>Rolling Speed (m/min)</th>
                        <th>Cooling Rate (°C/s)</th>
                        <th>Conductivity (IACS%)</th>
                        <th>Elongation (%)</th>
                        <th>UTS (MPa)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {predictions.map(pred => (
                        <tr key={pred.id}>
                          <td>{pred.id}</td>
                          <td>{pred.date}</td>
                          <td>{pred.casting_temp}</td>
                          <td>{pred.rolling_speed}</td>
                          <td>{pred.cooling_rate}</td>
                          <td>{pred.conductivity}</td>
                          <td>{pred.elongation}</td>
                          <td>{pred.uts}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            ) : (
              <div className="no-data-message">
                <p>You haven't made any predictions yet.</p>
                <p>Go to the Dashboard to make your first prediction!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;