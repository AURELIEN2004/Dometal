import React from 'react';
import { FaArrowDown } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const scrollToGallery = () => {
    document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Portes & Fenêtres en Acier</h1>
          <h2>Excellence & Durabilité</h2>
          <p>
            Spécialistes dans la conception et la fabrication de portes et fenêtres 
            en acier sur mesure. Alliant sécurité, esthétique et performance.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={scrollToGallery}>
              Voir nos Réalisations
            </button>
            <button 
              className="btn-secondary"
              onClick={() => document.getElementById('devis').scrollIntoView({ behavior: 'smooth' })}
            >
              Exemple de  Devis
            </button>
          </div>
        </div>
        <div className="scroll-indicator" onClick={scrollToGallery}>
          <FaArrowDown />
        </div>
      </div>
    </section>
  );
};

export default Hero;