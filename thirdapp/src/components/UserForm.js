import React, { useState } from 'react';

const UserForm = () => {
  // Step 1: Initialize state as an object
  const [userInfo, setUserInfo] = useState({
    firstname: '',
    email: '',
    age: '',
  });

  // Function to handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    // Step 2: Update state by spreading the existing state and updating the specific property
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('User Info:', userInfo);
    console.log(userInfo.email)
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="firstname"
            value={userInfo.name}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={userInfo.age}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
