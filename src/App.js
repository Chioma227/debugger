import React from "react";
import "../src/Styles/App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Team from "./Components/Team/Team";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
