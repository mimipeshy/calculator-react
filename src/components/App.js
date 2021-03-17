/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import Display from './display';
import ButtonPanel from './buttonPanel';
import calculate from '../logic/calculate';

const App = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const handleClick = buttonName => {
    setState(state => calculate(state, buttonName));
  };
  return (
    <div className="app">
      <>
        <Display result={state.next ? state.next : state.total} />
        <ButtonPanel clickHandler={handleClick} />
      </>
    </div>

  );
};

export default App;
