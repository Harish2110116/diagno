import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  border-radius: 20px; /* Increased border radius */
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 15px 15px rgba(0, 0, 0, 0.2); /* More shadow */
  position: relative;
  overflow: hidden;
  width: 678px;
  max-width: 100%;
  min-height: 400px;
`;

export const SignInContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  left: 0; /* Ensure it's positioned on the left */
  width: 50%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
  transition: all 0.6s ease-in-out;
  opacity: 1;
`;

export const Title = styled.h1`
  font-weight: bold;
  margin: 10%;
  text-align: center; /* Center align the text */
  line-height: 1.5; /* Increase line height */
  span {
    display: block; /* Make each word a block element */
    margin-bottom: 10px; /* Add space between lines */
  }
`;

export const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%; /* Ensure it starts from the middle */
  width: 50%;
  height: 100%;
  overflow: hidden;
  z-index: 100;
`;

export const GifImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the image covers the entire space */
`;

export const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
`;
