import React, { useState } from 'react';

const Counter = () => {
  const [stepSize, setStepSize] = useState(1);
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(prevCounter => prevCounter + stepSize);
  };
  const incrementStep = () => {
    setStepSize(stepSize=>stepSize+1);
  };
  const decrementCounter = () => {
    setCounter(prevCounter => prevCounter - stepSize);
  };
  const decrementStep = () => {
    setStepSize(stepSize=>stepSize-1);
  };

  return (
    <div>
      <label>
        <h2>Step: {stepSize}</h2>
        <button onClick={incrementStep}>+</button>
        <button onClick={decrementStep}>-</button>
      </label>
      <br />
      <h2>Counter: {counter}</h2>
      <button onClick={incrementCounter}>+</button>
      <button onClick={decrementCounter}>-</button>
    </div>
  );
};

export default Counter;
