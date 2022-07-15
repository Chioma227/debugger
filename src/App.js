import React from 'react';
import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import Works from './Components/Works';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About/>
      <Works/>
    </div>
  );
}

export default App;
