import React from 'react';
import "./dinner";
import './App.css';
import Dinner from './dinner';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dinner dishName="Chicken Biryani"/>
      </header>
    </div>
  );
}

export default App;
