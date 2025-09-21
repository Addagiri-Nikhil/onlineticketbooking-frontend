import React, { useState } from 'react';
import '../styles/Task1.css';

const CounterComponent = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  const [bgColor, setBgColor] = useState('lightblue');

  const increment = () => {
    setCount(count + 1);
    setBgColor(count + 1 > count ? 'lightgreen' : bgColor);
  };

  const decrement = () => {
    setCount(count - 1);
    setBgColor(count - 1 < count ? 'lightcoral' : bgColor);
  };

  return (
    <div className={`counter-container ${bgColor}`}>
      <h1 className="count">{count}</h1>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </div>
  );
};

export default CounterComponent;
