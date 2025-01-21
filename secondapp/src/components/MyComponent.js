import React, { useState } from 'react';
// import './Counter.css'; // Import the CSS file

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="counter-container">
      <h1>Counter</h1>
      <p className="count-display">You clicked {count} times</p>
      <button className="increment-button" onClick={incrementCount}>Click me</button>
    </div>
  );
};

export default Counter;
