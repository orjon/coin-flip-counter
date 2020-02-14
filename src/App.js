import React from 'react';
import Flipper from './Flipper';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className='App-body'>
        <header className='App-header'>
          <h2>Coin Flip Counter</h2>
        </header>
        <Flipper />
      </div>
    </div>
  );
}

export default App;
