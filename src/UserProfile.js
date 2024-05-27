// UserProfile.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const UserProfile = () => {
  const location = useLocation();
  const { state } = location;

  // Ensure state is not null or undefined
  const name = state?.name || 'No name provided';
  const email = state?.email || 'No email provided';

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default UserProfile;
