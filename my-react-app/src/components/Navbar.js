// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true'
  );

  // Add scroll effect to navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Handle dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img 
              src="/logo.png" 
              alt="AlumiPredict Logo" 
              className="logo-image"
              style={{ height: '30px', width: 'auto' }}
            />
          </Link>
        </div>
        
        <div className="navbar-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/features" className="nav-link">Features</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>
        
        <div className="navbar-auth">
          <button 
            onClick={toggleDarkMode} 
            className="dark-mode-toggle"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FaSun className="mode-icon" /> : <FaMoon className="mode-icon" />}
          </button>
          
          {isAuthenticated ? (
            <div className="user-menu">
              {user?.picture && (
                <Link to="/profile">
                  <img 
                    src={user.picture} 
                    alt="Profile" 
                    className="user-avatar"
                  />
                </Link>
              )}
              <div className="auth-buttons">
                <Link to="/main" className="dashboard-button">Dashboard</Link>
                <button
                  className="logout-button"
                  onClick={() => logout({ returnTo: window.location.origin })}
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <button className="login-button" onClick={loginWithRedirect}>
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;