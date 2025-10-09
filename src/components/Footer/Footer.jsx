// import React from 'react';
// import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
// import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

// import './Footer.css';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <section id="footer" className="footer">

//       <div className="container">
//         <div className="footer-content">
//           <div className="footer-section">
//             <h3>Dometal</h3>
//             <p>
//               Votre spécialiste en portes et fenêtres en acier. <br />
//               Qualité, sécurité et design depuis plus de 15 ans.
//             </p>
            
//             {/* <div className="social-links">
//               <a href="#" aria-label="Facebook"><FaFacebook /></a>
//               <a href="#" aria-label="Twitter"><FaTwitter /></a>
//               <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
//               <a href="#" aria-label="Instagram"><FaInstagram /></a>
//             </div> */}
//           </div>
          
//           <div className="footer-section">
//             <h4>Services</h4>
//             <ul>
//               <li><a href="#gallery">Portes d'entrée</a></li>
//               <li><a href="#gallery">Fenêtres</a></li>
//               <li><a href="#gallery">Portails</a></li>
//               <li><a href="#gallery">Structures sur mesure</a></li>
//             </ul>
//           </div>
          
//           <div className="footer-section">
//             <h4>Liens Utiles</h4>
//             <ul>
//               <li><a href="#about">À propos</a></li>
//               <li><a href="#gallery">Nos réalisations</a></li>
//               <li><a href="#contact">Contact</a></li>
//               <li><a href="#">Devis gratuit</a></li>
//             </ul>
//           </div>
          
//           <div className="footer-section">
//             <h4>Contact</h4>
//             <p>📞 +237 671 197 711</p>
//             <p>✉️ feudjioaurelien24@gmail.com</p>
//             <p>  <FaMapMarkerAlt className="contact-icon" />
//                  123 Rue Afam-abe  <br />face ecole marie celestin<br />kribi, Cameroun
//             </p>
//           </div>

//           <div className="footer-section">
//               <FaClock className="contact-icon" />
//               <div>
//                 <h3>Horaires</h3>
//                 <p>Lun - Ven: 8h00 - 18h00<br />Sam: 9h00 - 16h00</p>
//               </div>
//          </div>
          
//         </div>
//         <div className="footer-bottom">
//           <p>&copy; {currentYear} Dometal. Tous droits réservés. Develope par aurelientech</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Footer;


// src/components/Footer.jsx

import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
// Note: Les imports FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock sont déjà inclus ci-dessus.
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'; 

import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section id="footer" className="footer">

      <div className="container">
        <div className="footer-content">
          
          {/* Section 1: Logo & Description */}
          <div className="footer-section">
            <h3>Dometal</h3>
            <p>
              Votre spécialiste en portes et fenêtres en acier. <br />
              Qualité, sécurité et design depuis plus de 15 ans.
            </p>
            
            {/* Décommenter si vous souhaitez activer les liens sociaux */}
            {/* <div className="social-links">
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
            </div> */}
          </div>
          
          {/* Section 2: Services */}
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#gallery">Portes d'entrée</a></li>
              <li><a href="#gallery">Fenêtres</a></li>
              <li><a href="#gallery">Portails</a></li>
              <li><a href="#gallery">Structures sur mesure</a></li>
            </ul>
          </div>
          
          {/* Section 3: Liens Utiles */}
          <div className="footer-section">
            <h4>Liens Utiles</h4>
            <ul>
              <li><a href="#about">À propos</a></li>
              <li><a href="#gallery">Nos réalisations</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#">Devis gratuit</a></li>
            </ul>
          </div>
          
          {/* Section 4: Contact Infos (Téléphone & Email) */}
          <div className="footer-section contact-info-section">
            <h4>Contact</h4>
            <p>
              <FaPhone className="contact-icon" /> 
              <a href="tel:+237 671 197 711">+237 671 197 711</a>
            </p>
            <p>
              <FaEnvelope className="contact-icon" /> 
              feudjioaurelien24@gmail.com
            </p>
            {/* L'adresse a été reformulée pour mieux s'aligner */}
            <p>
              <FaMapMarkerAlt className="contact-icon" />
              123 Rue Afam-abe, face école Marie Célestin, Kribi, Cameroun
            </p>
          </div>

          {/* Section 5: Horaires */}
          <div className="footer-section">
              <h4>Horaires</h4>
              <p>
                <FaClock className="contact-icon" />
                <span>
                  Lun - Ven: 8h00 - 18h00<br />Sam: 9h00 - 16h00
                </span>
              </p>
         </div>
          
        </div>
        
        {/* Ligne de Copyright */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} Dometal. Tous droits réservés. Développé par aurelientech</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;