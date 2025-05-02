import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './ProfilePage.css';
import { FaEdit, FaUser, FaSave, FaChartLine } from 'react-icons/fa';
import axios from 'axios';

const ProfilePage = () => {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({
    nickname: '',
    name: '',
    email: '',
    company: ''
  });
  const [savedUser, setSavedUser] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState('');

  // Initialize form and update last login when user data is available
  useEffect(() => {
    if (user) {
      // Try to get user data from localStorage first
      const localUserData = localStorage.getItem(`user_${user.sub}`);
      const lastLoginData = localStorage.getItem(`last_login_${user.sub}`);
      
      // Update last login time only if it's a new login session
      if (!lastLoginData || Date.now() - parseInt(lastLoginData) > 3600000) { // 1 hour threshold
        localStorage.setItem(`last_login_${user.sub}`, Date.now().toString());
      }
      
      if (localUserData) {
        const parsedData = JSON.parse(localUserData);
        setEditedUser(parsedData);
        setSavedUser(parsedData);
      } else {
        // Fall back to Auth0 user data
        const initialData = {
          nickname: user.nickname || '',
          name: user.name || '',
          email: user.email || '',
          company: ''
        };
        setEditedUser(initialData);
        setSavedUser(initialData);
      }
    }
  }, [user]);
  
  // Get total predictions count from localStorage
  const getTotalPredictions = () => {
    if (!user) return 0;
    return parseInt(localStorage.getItem(`predictions_count_${user.sub}`) || '0');
  };

  if (isLoading) {
    return <div className="profile-loading">Loading...</div>;
  }

  if (!isAuthenticated) {
    return <div className="profile-error">Please log in to view your profile</div>;
  }

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    // Reset form data when opening the edit modal
    if (!isEditing) {
      setEditedUser(savedUser || {
        nickname: user.nickname || '',
        name: user.name || '',
        email: user.email || '',
        company: ''
      });
    }
    setSaveError('');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({
      ...editedUser,
      [name]: value
    });
  };

  const handleSave = async () => {
    setIsSaving(true);
    setSaveError('');
    
    try {
      // In a real application with a backend, you would do:
      // 1. Get an access token
      // const token = await getAccessTokenSilently();
      
      // 2. Send the data to your backend API
      // const response = await axios.patch(
      //   'https://your-api.com/users/profile',
      //   editedUser,
      //   {
      //     headers: {
      //       Authorization: `Bearer ${token}`
      //     }
      //   }
      // );
      
      // For this demo, we'll store in localStorage
      localStorage.setItem(`user_${user.sub}`, JSON.stringify(editedUser));
      
      // Update the saved user state
      setSavedUser(editedUser);
      
      // Close the modal
      setIsEditing(false);
      
      // Show success message
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error saving profile:', error);
      setSaveError('Failed to update profile. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  // Use savedUser for display if available, otherwise fall back to Auth0 user data
  const displayUser = savedUser || {
    nickname: user.nickname || '',
    name: user.name || '',
    email: user.email || '',
    company: ''
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <img src={user.picture} alt="Profile" className="profile-avatar" />
          <h2 className="profile-name">{displayUser.name}</h2>
          <p className="profile-email">{displayUser.email}</p>
        </div>
        
        <div className="profile-details">
          <div className="profile-section">
            <h3>Account Information</h3>
            <div className="profile-info-item">
              <span className="info-label">Username:</span>
              <span className="info-value">{editedUser.nickname || user.nickname || 'Not set'}</span>
            </div>
            <div className="profile-info-item">
              <span className="info-label">E-mail:</span>
              <span className="info-value">{editedUser.email || user.email}</span>
            </div>
            <div className="profile-info-item">
              <span className="info-label">Email verified:</span>
              <span className="info-value">{user.email_verified ? 'Yes' : 'No'}</span>
            </div>
            <div className="profile-info-item">
              <span className="info-label">Account created:</span>
              <span className="info-value">
                {new Date(user.updated_at).toLocaleDateString('en-IN', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric'
                })}
              </span>
            </div>
            <div className="profile-info-item">
              <span className="info-label">Last Login:</span>
              <span className="info-value">
                {localStorage.getItem(`last_login_${user.sub}`) 
                  ? new Date(parseInt(localStorage.getItem(`last_login_${user.sub}`))).toLocaleDateString('en-IN', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })
                  : 'First login'}
              </span>
            </div>
            <div className="profile-info-item">
              <span className="info-label">Total predictions done:</span>
              <span className="info-value">{getTotalPredictions()}</span>
            </div>
            <div className="profile-info-item">
              <span className="info-label">Industry/Company name:</span>
              <span className="info-value">{displayUser.company || 'Not specified'}</span>
            </div>
            <button className="profile-button" onClick={handleEditToggle}>
              <FaEdit /> Edit Credentials
            </button>
          </div>
          
          <div className="profile-section">
            <h3>Preferences</h3>
            <p>You can manage your account preferences and settings here.</p>
            <button className="profile-button">
              <FaUser /> Edit Preferences
            </button>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {isEditing && (
        <div className="edit-modal-overlay">
          <div className="edit-modal">
            <h3>Edit Profile Information</h3>
            {saveError && <div className="edit-error-message">{saveError}</div>}
            <div className="edit-form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={editedUser.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="edit-form-group">
              <label htmlFor="nickname">Username</label>
              <input
                type="text"
                id="nickname"
                name="nickname"
                value={editedUser.nickname}
                onChange={handleInputChange}
              />
            </div>
            <div className="edit-form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={editedUser.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="edit-form-group">
              <label htmlFor="company">Industry/Company name</label>
              <input
                type="text"
                id="company"
                name="company"
                value={editedUser.company || ''}
                onChange={handleInputChange}
                placeholder="Enter your industry or company name"
              />
            </div>
            <div className="edit-modal-buttons">
              <button className="cancel-button" onClick={handleEditToggle}>
                Cancel
              </button>
              <button 
                className="save-button" 
                onClick={handleSave}
                disabled={isSaving}
              >
                {isSaving ? 'Saving...' : <><FaSave /> Save Changes</>}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;