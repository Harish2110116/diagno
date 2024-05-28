import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ServiceDetail.css'; // Ensure consistent styling

const ServiceDetail = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Track current image index
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleFeatureClick = (feature) => {
    // Implement navigation or action for each feature
    console.log(`Navigating to ${feature}`);
    // For example, navigate(`/feature/${feature}`);
  };

  // Array of images
  const images = [
    require('./chest.png'), // Adjust paths as necessary
    require('./chest_heatmap.jpg'),
    require('./images.jpg'),
    require('./chest_heatmap.jpg'),
    // Add more image paths as needed
  ];

  // Array of content corresponding to each image
  const content = [
    {
      title: 'Service Detail 1',
      description: 'This is the detailed description of service 1.',
    },
    {
      title: 'Service Detail 2',
      description: 'This is the detailed description of service 2.',
    },
    {
      title: 'Service Detail 3',
      description: 'This is the detailed description of service 3.',
    },
    {
        title: 'Service Detail 4',
        description: 'This is the detailed description of service 3.',
      },
    // Add more content objects as needed
  ];

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Move to next image
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length); // Move to previous image
  };

  return (
    <div className="service-detail-container">
      <div className="menu">
        <button onClick={toggleMenu} className="menu-button">
          Menu
        </button>
        {menuOpen && (
          <div className="dropdown">
            <button onClick={() => handleFeatureClick('Feature1')}>Feature 1</button>
            <button onClick={() => handleFeatureClick('Feature2')}>Feature 2</button>
            <button onClick={() => handleFeatureClick('Feature3')}>Feature 3</button>
            <button onClick={() => handleFeatureClick('Feature4')}>Feature 4</button>
          </div>
        )}
      </div>
      <div className="service-detail-content">
        <div className="service-detail-image">
          {/* Display current image based on currentImageIndex */}
          <img src={images[currentImageIndex]} alt={`Service Detail ${currentImageIndex}`} />
          <div className="image-controls">
            {/* Button to move to previous image */}
            <button onClick={handlePreviousImage} disabled={currentImageIndex === 0}>
              &lt;
            </button>
            {/* Dots indicating image count */}
            {[...Array(images.length)].map((_, index) => (
              <button
                key={index}
                className={index === currentImageIndex ? 'active-dot' : 'inactive-dot'}
                onClick={() => setCurrentImageIndex(index)}
              >
                {index + 1} {/* Display the index value */}
              </button>
            ))}
            {/* Button to move to next image */}
            <button onClick={handleNextImage} disabled={currentImageIndex === images.length - 1}>
              &gt;
            </button>
          </div>
        </div>
        <div className="service-detail-text">
          {/* Display current content based on currentImageIndex */}
          <h1>{content[currentImageIndex].title}</h1>
          <p>{content[currentImageIndex].description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
