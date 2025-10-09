// import React, { useState, useEffect } from 'react';
// import { FaBars, FaTimes,FaPhone } from 'react-icons/fa';
// import './Navbar.css';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const scrollToSection = (sectionId) => {
//     document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
//     setIsMenuOpen(false);
//   };

//   return (
//     <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
//       <div className="nav-container">
//         <div className="nav-logo">
//           <h2>Dometal</h2>
//         </div>
        
//         <ul className={`nav-menu ${isMenuOpen ? 'nav-menu-active' : ''}`}>
//           <li><button onClick={() => scrollToSection('home')}>Accueil</button></li>
//           <li><button onClick={() => scrollToSection('service')}>Service</button></li>
//           <li><button onClick={() => scrollToSection('gallery')}>Galerie</button></li>
//           <li><button onClick={() => scrollToSection('about')}>À Propos</button></li>
//           <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>       
//           <li><button onClick={() => scrollToSection('')}> 
//              <FaPhone className="navbar-icon" /><a href="tel:+237 671 197 711">+237 671 197 711</a>
//            </button></li>       
//         </ul>
        
//         <div className="nav-toggle" onClick={toggleMenu}>
//           {isMenuOpen ? <FaTimes /> : <FaBars />}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
   // src/components/Navbar.jsx

import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes,FaPhone } from 'react-icons/fa';
import './Navbar.css';

// 🚨 IMPORTANT : Définissez le chemin vers votre image de fond !
// Ex: import navBackgroundImage from '../../assets/textures/metal-dark.jpg';
// Laissez-le commenté si vous ne l'avez pas encore
// const NAV_BACKGROUND_IMAGE = navBackgroundImage;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Gestion de l'effet de scroll pour changer le style de la barre de navigation
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fonction pour ouvrir/fermer le menu mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Fonction pour défiler vers une section
  const scrollToSection = (sectionId) => {
    // Vérifie si l'ID est valide avant de défiler
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    // La classe 'navbar-scrolled' est ajoutée lorsque l'utilisateur a défilé
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <h2>Dometal</h2>
        </div>
        
        <ul className={`nav-menu ${isMenuOpen ? 'nav-menu-active' : ''}`}>
          <li><button onClick={() => scrollToSection('home')}>Accueil</button></li>
          <li><button onClick={() => scrollToSection('service')}>Service</button></li>
          <li><button onClick={() => scrollToSection('gallery')}>Galerie</button></li>
          <li><button onClick={() => scrollToSection('about')}>À Propos</button></li>
          <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>       
          {/* L'élément téléphone doit être un lien, pas un bouton dans ce cas précis */}
          <li className="nav-phone-link">
             <a href="tel:+237 671 197 711"> 
                <FaPhone className="navbar-icon" /> +237 671 197 711
             </a>
           </li>       
        </ul>
        
        {/* Bouton de bascule pour le mobile */}
        <div className="nav-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;