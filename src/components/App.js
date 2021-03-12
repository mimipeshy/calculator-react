import React from 'react';
import Display from './display';
import ButtonPanel from './buttonPanel';
import calculate from '../logic/calculate';

function App() {
  return (
    <div className="app">
      <>
        <Display />
        <ButtonPanel />
      </>
    </div>

  );
}
calculate();

export default App;
