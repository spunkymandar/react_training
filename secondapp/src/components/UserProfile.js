import React, { useState } from 'react';
import styles1 from './UserForm.module.css'

const UserProfile = () => {
  // Initialize state as an object
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    age: '',
  });

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value, // Update only the changed field
    }));
  };

  return (
    <div className={styles1.userformcontainer}>
      <h1>User Profile</h1>
      <form>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={profile.age}
            onChange={handleChange}
          />
        </div>
      </form>
      <div>
        <h2>Profile Summary</h2>
        <p>Name: {profile.name}</p>
        <p>Email: {profile.email}</p>
        <p>Age: {profile.age}</p>
      </div>
    </div>
  );
};

export default UserProfile;
