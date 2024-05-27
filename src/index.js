import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="573473055098-3mgmekvj0qnnv9n4fg2nkkuljrbr2th2.apps.googleusercontent.com">
        <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);


reportWebVitals();
