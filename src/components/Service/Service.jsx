

import React, { useState, useEffect } from 'react';
import { FaDoorOpen, FaWindowRestore, FaToolbox, FaGavel, FaCogs } from 'react-icons/fa';
import './Service.css';

// Données des services
const serviceData = [
  {
    icon: <FaDoorOpen />,
    title: "Conception & Fabrication de Portes",
    description: "Design expert et fabrication de portes en acier, garantissant sécurité et esthétique moderne.",
  },
  {
    icon: <FaWindowRestore />,
    title: "Conception & Installation de Fenêtres",
    description: "Solutions sur mesure pour fenêtres, s'adaptant à tout style architectural. Isolation et sécurité optimales.",
  },
  {
    icon: <FaToolbox />,
    title: "Portails et Accessoires Décoratifs",
    description: "Création de portails sur mesure et d'accessoires décoratifs uniques pour embellir votre espace.",
  },
  {
    icon: <FaGavel />,
    title: "Restauration et Réparation",
    description: "Restauration et réparation professionnelles de vos structures métalliques existantes, leur redonnant leur éclat et leur fonctionnalité.",
  },
  {
    icon: <FaCogs />,
    title: "Autres Structures en Acier",
    description: "Solutions personnalisées pour toutes autres structures en acier : escaliers, rampes, garde-corps, et éléments architecturaux spécifiques.",
  },
];

const Service = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Détecte la taille d’écran
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024); // seuil tablette/mobile
    };
    handleResize(); // appel initial
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="service" className="service-section">
      <div className="service-container">
        
        {/* Titre et introduction */}
        <h2 className="service-title">Nos Services</h2>
        <p className="service-intro-text">
          Nous vous offrons une gamme complète de services de métallerie fine, adaptés à vos besoins.
          De la conception à la restauration, notre expertise est votre garantie.
        </p>

        {/* Conteneur principal */}
        <div className="service-list-wrapper">
          <div className="service-list">
            {/* 1ère série (toujours affichée) */}
            {serviceData.map((service, index) => (
              <div key={`service-${index}`} className="service-card">
                <div className="card-icon">{service.icon}</div>
                <h3 className="card-title">{service.title}</h3>
                <p className="card-description">{service.description}</p>
              </div>
            ))}

            {/* 2e série seulement sur desktop */}
            {!isMobile &&
              serviceData.map((service, index) => (
                <div key={`service-copy-${index}`} className="service-card">
                  <div className="card-icon">{service.icon}</div>
                  <h3 className="card-title">{service.title}</h3>
                  <p className="card-description">{service.description}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
