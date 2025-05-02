import React, { useState } from 'react';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    // Clear any previous errors
    setError('');
    
    // In a real app, you would send the form data to your backend here
    console.log('Form submitted:', formData);
    
    // Show success message
    setSubmitted(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Have questions or feedback? We'd love to hear from you!</p>
      </div>
      
      <div className="contact-content">
        <div className="contact-form-container">
          {submitted ? (
            <div className="success-message">
              <h3>Thank you for your message!</h3>
              <p>We've received your inquiry and will get back to you shortly.</p>
              <button 
                className="new-message-button"
                onClick={() => setSubmitted(false)}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              {error && <div className="error-alert">{error}</div>}
              
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          )}
        </div>
        
        <div className="contact-info">
          <div className="info-card">
            <h3>Get in Touch</h3>
            <div className="info-item">
              <span className="info-icon">📧</span>
              <p>parasmehta1524@gmail.com</p>
            </div>
            <div className="info-item">
              <span className="info-icon">📞</span>
              <p>+91 93154 23456</p>
            </div>
            <div className="info-item">
              <span className="info-icon">📍</span>
              <p>JMIT, Radaur</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;