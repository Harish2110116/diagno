
// import React from 'react';
// import {BrowserRouter,Route, Routes, useNavigate } from 'react-router-dom';
// import { GoogleLogin } from '@react-oauth/google';
// import {jwtDecode} from 'jwt-decode';
// import OnlineDoctorGif from './Online Doctor.gif';
// import * as Components from './Components';
// import UserProfile from './UserProfile';


// // Define the LoginPage component
// const LoginPage = () => {
//   const navigate = useNavigate();

//   const handleLoginSuccess = (credentialResponse) => {
//     alert("Login Successful");

//     try {
//       const decoded = jwtDecode(credentialResponse?.credential);
//       const user = {
//         name: decoded.name,
//         email: decoded.email,
//       };
      
//     console.log(user);

//     // Redirect to UserProfile page after successful login
//     navigate('/user-profile', { state: user });// Update with your target route
//     } catch (error) {
//       console.error("Error decoding JWT:", error);
//       alert("Error decoding JWT");
//     }
//   };

//   const handleLoginError = () => {
//     alert("Login Failed");
//     console.log('Login Failed');
//   };

//   return (
//     <Components.Container>
//       <Components.SignInContainer>
//         <Components.Title>Welcome<br/> to XYZ App</Components.Title>
//         <GoogleLogin
//           onSuccess={(response) => handleLoginSuccess(response)}
//           onError={handleLoginError}
//         />
//       </Components.SignInContainer>
//       <Components.OverlayContainer>
//         <Components.GifImage src={OnlineDoctorGif} alt="Your GIF" />
//       </Components.OverlayContainer>
//     </Components.Container>
//   );
// };


// // Main App component with Router
// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<LoginPage />} />
//         <Route path="/user-profile" element={<UserProfile />}/>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// App.js

// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import LoginPage from './LoginPage';
// import HomePage from './home/HomePage';
// import './index.css'; // Ensure consistent styling

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<LoginPage />} />
//         <Route path="/home" element={<HomePage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// src/App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import HomePage from './home/HomePage';
import ServiceDetail from './home/ServiceDetail'; // Import the new component
import './index.css'; // Ensure consistent styling
// src/App.js

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/service-detail" element={<ServiceDetail />} /> {/* Add the route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
