import './App.css';

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Component Imports
import LandingPage from './components/LandingPage';
import MainPage from './components/MainPage';
import FeaturesPage from './components/FeaturesPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import ProfilePage from './components/ProfilePage';
import Navbar from './components/Navbar';
import PrivateRoute from './routes/privateRoute';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/main"
          element={
            <PrivateRoute>
              <MainPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
