import React from 'react';
import { Link } from 'react-scroll';

const TopBar = () => {
  return (
    <nav>
      <ul>
        <li className="company-name"><a href="#">Company Name</a></li>
        <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={500}>About</Link></li>
        <li><Link to="services" smooth={true} duration={500}>Services</Link></li>
        <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default TopBar;
