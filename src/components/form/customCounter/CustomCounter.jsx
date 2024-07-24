// Counter.js
import React, { useState, useEffect } from 'react';
import './customCounter.css';

const CustomCounter = ({ initialValue = 1, onChange }) => {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    onChange(count);
  }, [count, onChange]);

  const decrement = () => {
    setCount(prevCount => Math.max(prevCount - 1, 1));
  };

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div className="counter">
      <button onClick={decrement} className="counter-btn">-</button>
      <span className="counter-value">{count}</span>
      <button onClick={increment} className="counter-btn">+</button>
    </div>
  );
};

export default CustomCounter;
