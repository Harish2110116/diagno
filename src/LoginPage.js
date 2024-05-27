// LoginPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import {jwtDecode} from 'jwt-decode';
import OnlineDoctorGif from './Online Doctor.gif';
import * as Components from './Components.js';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = (credentialResponse) => {
    alert("Login Successful");

    try {
        const decoded = jwtDecode(credentialResponse?.credential);
      const user = {
        name: decoded.name,
        email: decoded.email,
      };
      console.log(user);

      // Redirect to the home page after successful login
      navigate('/home', { state: user });
    } catch (error) {
      console.error("Error decoding JWT:", error);
      alert("Error decoding JWT");
    }
  };

  const handleLoginError = () => {
    alert("Login Failed");
    console.log('Login Failed');
  };

  return (
    <Components.Container>
      <Components.SignInContainer>
        <Components.Title>Welcome<br/> to XYZ App</Components.Title>
        <GoogleLogin
          onSuccess={(response) => handleLoginSuccess(response)}
          onError={handleLoginError}
        />
      </Components.SignInContainer>
      <Components.OverlayContainer>
        <Components.GifImage src={OnlineDoctorGif} alt="Your GIF" />
      </Components.OverlayContainer>
    </Components.Container>
  );
};

export default LoginPage;
