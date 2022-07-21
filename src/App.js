import React from 'react';
import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import Works from './Components/Works';
import Footer from './Components/Footer';
import Contact from './Components/Contact';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
