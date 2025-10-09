import React from 'react';
import { FaShieldAlt, FaCog, FaAward, FaUsers } from 'react-icons/fa';
import './About.css';

const About = () => {
  const features = [
    {
      icon: <FaShieldAlt />,
      title: "Sécurité Maximale",
      description: "Nos produits en acier offrent une protection optimale"
    },
    {
      icon: <FaCog />,
      title: "Sur Mesure",
      description: "Conception personnalisée selon vos besoins spécifiques"
    },
    {
      icon: <FaAward />,
      title: "Qualité Premium",
      description: "Matériaux de haute qualité et finitions soignées"
    },
    {
      icon: <FaUsers />,
      title: "Expertise",
      description: "Plus de 15 ans d'expérience dans le domaine"
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <div className="section-header">
              <h2>À Propos de Dometal</h2>
              <p>Votre partenaire de confiance pour tous vos projets en acier</p>
            </div>
            
            <div className="about-description">
              <p>
                Depuis plus de 15 ans, SteelCraft se spécialise dans la conception, 
                la fabrication et l'installation de portes, fenêtres et structures 
                en acier de haute qualité. Notre équipe d'artisans expérimentés 
                combine savoir-faire traditionnel et technologies modernes pour 
                vous offrir des solutions durables et esthétiques.
              </p>
              
              <p>
                Que ce soit pour des projets résidentiels, commerciaux ou industriels, 
                nous nous engageons à livrer des produits qui dépassent vos attentes 
                en termes de sécurité, de design et de performance.
              </p>
            </div>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;