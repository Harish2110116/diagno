// import React from 'react';
// import TopBar from './TopBar'; // Adjust the import path as necessary
// import { Element } from 'react-scroll';
// import OnlineDoctorGif from './output-onlinegiftools.gif'; // Adjust the import path as necessary
// import './index.css'; // Ensure consistent styling
// import ik1 from './Radiography.gif'
// import ik2 from './CT scan-amico.png';
// import ik3 from './Hospital family visit-amico.png';
// import ik4 from './Radiography (1).gif';
// import ik5 from './Radiography (2).gif';
// import ik6 from './Radiography-bro.png';
// import abt from './Doctors.gif';

// const HomePage = () => {
//   return (
//     <div>
//       <TopBar />
//       <Element name="home" className="section home" style={{ "margin-top": "2500px" }}>
//         <div className="home-content">
//           <img src={OnlineDoctorGif} alt="Doctor GIF" className="home-gif" />
//           <div className="home-text">
//             <h1>Stay Safe, Stay Healthy!</h1>
//             <p>Welcome to our medical website. Here, we provide top-notch medical services.</p>
//             <button className="home-button" style={{ "marginLeft": "40%" }}>Learn More</button>
//           </div>
//         </div>
//       </Element>
//       <Element name="about" className="section home" style={{"backgroundColor":"white"}}>
//       <div className="home-content">
//       <img src={abt} alt="Doctor GIF" className="home-gif" />
//       <div className="home-text">
//             <h1>About</h1>
//             <p>We are a leading medical institution with a team of experienced professionals <br></br>dedicated to providing the best healthcare services.</p>
//           </div>
//     </div>
//       </Element>
//       <Element name="services" className="section services">
//         <h1>Our Services</h1>
//         <div className="services-container">
//           <div className="box">
//             <i className="fas fa-user-md"></i>
           
//             <img src={ik1} alt="Description" />
//             <h3>Expert Doctors</h3>
//             <p>We have the most specialist doctors in every field.</p>
//             <button className="home-button">Learn More</button>
//           </div>
//           <div className="box">
//             <i className="fas fa-heartbeat"></i>
//             <img src={ik2} alt="Description" />
//             <h3>Advanced Equipment</h3>
//             <p>We use the latest technology and advanced equipment for diagnosis and treatment.</p>
//             <button className="home-button">Learn More</button>
//           </div>
//           <div className="box">
//             <i className="fas fa-medkit"></i>
//             <img src={ik3} alt="Description" />
//             <h3>Emergency Care</h3>
//             <p>Our emergency care services are available 24/7 to provide immediate medical assistance.</p>
//             <button className="home-button">Learn More</button>
//           </div>
//         </div>
//         <div className="services-container">
//           <div className="box">
//             <i className="fas fa-hospital"></i>
//             <img src={ik4} alt="Description" />
//             <h3>Inpatient Services</h3>
//             <p>We offer comfortable inpatient facilities for patients requiring hospitalization.</p>
//             <button className="home-button">Learn More</button>
//           </div>
//           <div className="box">
//             <i className="fas fa-stethoscope"></i>
//             <img src={ik5} alt="Description" />
//             <h3>Specialized Treatments</h3>
//             <p>We provide specialized treatments tailored to meet the unique needs of our patients.</p>
//             <button className="home-button">Learn More</button>
//           </div>
//           <div className="box">
//             <i className="fas fa-stethoscope"></i>
//             <img src={ik6} alt="Description" />
//             <h3>Specialized Treatments</h3>
//             <p>We provide specialized treatments tailored to meet the unique needs of our patients.</p>
//             <button className="home-button">Learn More</button>
//           </div>
//         </div>
//       </Element>
//       <Element name="contact" className="section contact">
//         <h1>Contact</h1>
//         <p>Contact us at (123) 456-7890 or email us at info@medicalwebsite.com. Visit us at 123 Medical Street, Health City.</p>
//       </Element>
//     </div>
//   );
// };

// export default HomePage;
// src/home/HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from './TopBar';
import { Element } from 'react-scroll';
import OnlineDoctorGif from './output-onlinegiftools.gif';
import './index.css';
import ik1 from './Radiography.gif';
import ik2 from './CT scan-amico.png';
import ik3 from './Hospital family visit-amico.png';
import ik4 from './Radiography (1).gif';
import ik5 from './Radiography (2).gif';
import ik6 from './Radiography-bro.png';
import abt from './Doctors.gif';

const HomePage = () => {
  const navigate = useNavigate();

  const navigateToServiceDetail = () => {
    navigate('/service-detail');
  };

  return (
    <div>
      <TopBar />
      <Element name="home" className="section home" style={{ marginTop: '2500px' }}>
        <div className="home-content">
          <img src={OnlineDoctorGif} alt="Doctor GIF" className="home-gif" />
          <div className="home-text">
            <h1>Stay Safe, Stay Healthy!</h1>
            <p>Welcome to our medical website. Here, we provide top-notch medical services.</p>
            <button className="home-button" style={{ marginLeft: '40%' }}>Learn More</button>
          </div>
        </div>
      </Element>
      <Element name="about" className="section home" style={{ backgroundColor: 'white' }}>
        <div className="home-content">
          <img src={abt} alt="Doctor GIF" className="home-gif" />
          <div className="home-text">
            <h1>About</h1>
            <p>We are a leading medical institution with a team of experienced professionals <br />dedicated to providing the best healthcare services.</p>
          </div>
        </div>
      </Element>
      <Element name="services" className="section services">
        <h1>Our Services</h1>
        <div className="services-container">
          <div className="box">
            <i className="fas fa-user-md"></i>
            <img src={ik1} alt="Description" />
            <h3>Expert Doctors</h3>
            <p>We have the most specialist doctors in every field.</p>
            <button className="home-button" onClick={navigateToServiceDetail}>Learn More</button>
          </div>
          <div className="box">
            <i className="fas fa-heartbeat"></i>
            <img src={ik2} alt="Description" />
            <h3>Advanced Equipment</h3>
            <p>We use the latest technology and advanced equipment for diagnosis and treatment.</p>
            <button className="home-button">Learn More</button>
          </div>
          <div className="box">
            <i className="fas fa-medkit"></i>
            <img src={ik3} alt="Description" />
            <h3>Emergency Care</h3>
            <p>Our emergency care services are available 24/7 to provide immediate medical assistance.</p>
            <button className="home-button">Learn More</button>
          </div>
        </div>
        <div className="services-container">
          <div className="box">
            <i className="fas fa-hospital"></i>
            <img src={ik4} alt="Description" />
            <h3>Inpatient Services</h3>
            <p>We offer comfortable inpatient facilities for patients requiring hospitalization.</p>
            <button className="home-button">Learn More</button>
          </div>
          <div className="box">
            <i className="fas fa-stethoscope"></i>
            <img src={ik5} alt="Description" />
            <h3>Specialized Treatments</h3>
            <p>We provide specialized treatments tailored to meet the unique needs of our patients.</p>
            <button className="home-button">Learn More</button>
          </div>
          <div className="box">
            <i className="fas fa-stethoscope"></i>
            <img src={ik6} alt="Description" />
            <h3>Specialized Treatments</h3>
            <p>We provide specialized treatments tailored to meet the unique needs of our patients.</p>
            <button className="home-button">Learn More</button>
          </div>
        </div>
      </Element>
      <Element name="contact" className="section contact">
        <h1>Contact</h1>
        <p>Contact us at (123) 456-7890 or email us at info@medicalwebsite.com. Visit us at 123 Medical Street, Health City.</p>
      </Element>
    </div>
  );
};

export default HomePage;
