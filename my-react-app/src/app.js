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
import ReportPage from './components/ReportPage';
import Navbar from './components/Navbar';
import PrivateRoute from './routes/privateRoute';

// Feature Detail Pages
import AIBasedAnalysis from './components/feature-details/AIBasedAnalysis';
import SmartRecommendations from './components/feature-details/SmartRecommendations';
import SecureAccess from './components/feature-details/SecureAccess';
import LiveMonitoring from './components/feature-details/LiveMonitoring';
import PrecisionManufacturing from './components/feature-details/PrecisionManufacturing';
import IngotProcurement from './components/process-details/IngotProcurement';
import Melting from './components/process-details/Melting';
import Holding from './components/process-details/Holding';
import ChemicalCompositionAnalysis from './components/process-details/ChemicalCompositionAnalysis';
import Casting from './components/process-details/Casting';
import CastBarEntry from './components/process-details/CastBarEntry';
import ThreeRollRollingMill from './components/process-details/ThreeRollRollingMill';
import MechanicalAnalysis from './components/process-details/MechanicalAnalysis';
import ElectricalAnalysis from './components/process-details/ElectricalAnalysis';
import Recoiling from './components/process-details/Recoiling';
import ProductQualityAssurance from './components/process-details/ProductQualityAssurance';
import Shipping from './components/process-details/Shipping';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        
        {/* Feature Detail Routes */}
        <Route path="/features/ai-analysis" element={<AIBasedAnalysis />} />
        <Route path="/features/smart-recommendations" element={<SmartRecommendations />} />
        <Route path="/features/secure-access" element={<SecureAccess />} />
        <Route path="/features/live-monitoring" element={<LiveMonitoring />} />
        <Route path="/features/precision-manufacturing" element={<PrecisionManufacturing />} />
        <Route path="/process/ingot-procurement" element={<IngotProcurement />} />
        <Route path="/process/melting" element={<Melting />} />
        <Route path="/process/holding" element={<Holding />} />
        <Route path="/process/chemical-analysis" element={<ChemicalCompositionAnalysis />} />
        <Route path="/process/casting" element={<Casting />} />
        <Route path="/process/cast-bar-entry" element={<CastBarEntry />} />
        <Route path="/process/three-roll-mill" element={<ThreeRollRollingMill />} />
        <Route path="/process/mechanical-analysis" element={<MechanicalAnalysis />} />
        <Route path="/process/electrical-analysis" element={<ElectricalAnalysis />} />
        <Route path="/process/recoiling" element={<Recoiling />} />
        <Route path="/process/quality-assurance" element={<ProductQualityAssurance />} />
        <Route path="/process/shipping" element={<Shipping />} />
        
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
        <Route
          path="/report"
          element={
            <PrivateRoute>
              <ReportPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
