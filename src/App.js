import React from 'react';
import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Intro from './Components/Intro';
import Works from './Components/Works';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      {/* <Intro/> */}
      <Works/>
    </div>
  );
}

export default App;
