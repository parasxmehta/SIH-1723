// src/index.js
//import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { Auth0Provider } from '@auth0/auth0-react';
import './App.css';

const domain = "dev-xbdf725h1ldi8p21.us.auth0.com";
const clientId = "YRKSFRD9qGqo7uf19JZoQIyT7vgOhti8";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={`${window.location.origin}/main`}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
