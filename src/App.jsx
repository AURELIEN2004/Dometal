import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Service from './components/Service/Service';
import Gallery from './components/Gallery/Gallery';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Devis from './components/Devis/Devis';
import Footer from './components/Footer/Footer';
import './App.css';
import './styles/global.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Service/>
      <Gallery />
      <About />
      <Devis/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;