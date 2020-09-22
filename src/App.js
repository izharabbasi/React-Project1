import React from 'react';
import "./dinner";
import './App.css';
import Dinner from './dinner';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dinner dishName="Chicken Biryani" sweet="Kheer"/>
        <Dinner dishName="Chicken Karachi" sweet="Jalabi"/>
        <Dinner dishName="Nahari" sweet="Halwa"/>
      </header>
    </div>
  );
}

export default App;
