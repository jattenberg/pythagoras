import React from 'react';
import { Map } from 'immutable';
import rd3 from 'react-d3-library'
import './App.css';

// generator for all odd numbers
function* odds() {
  let i = 1;
  while (true) {
    yield i;
    i += 2;
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        

      </header>
    </div>
  );
}

export default App;
