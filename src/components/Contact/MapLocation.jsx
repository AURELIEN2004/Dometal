// // src/components/MapLocation.jsx
// import React from 'react';
// import './MapLocation.css';

// const MapLocation = () => {
//   /* INSTRUCTIONS IMPORTANTES :
//     1. Rendez-vous sur Google Maps (maps.google.com).
//     2. Cherchez l'adresse exacte de votre entreprise : 
//        "123 Rue Afam-abe, face école Marie Célestin, Kribi, Cameroun".
//     3. Cliquez sur le bouton "Partager" (Share) à gauche.
//     4. Sélectionnez l'onglet "Intégrer la carte" (Embed map).
//     5. Copiez le code HTML fourni par Google, puis remplacez l'URL 
//        dans l'attribut 'src' ci-dessous par celle que vous avez copiée.
    
//     L'URL ci-dessous est un exemple pour Kribi. REMPLACEZ-LA par la vôtre.
//   */
//   const embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1461.3402604240375!2d9.909675283451004!3d2.946114227791851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1062972fa9982463%3A0x6a0589a194916a04!2sKribi%20Beach!5e0!3m2!1sfr!2scm!4v1699965000000!5m2!1sfr!2scm";

//   return (
//     <div className="map-container">
//       <h3 className="map-title">Où nous trouver ?</h3>
//       <div className="map-responsive">
//         <iframe
//           src={embedUrl}
//           // Les attributs par défaut sont 0 pour une gestion complète par le CSS
//           width="0" 
//           height="0"
//           style={{ border: 0 }}
//           allowFullScreen=""
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//           title="Localisation de l'entreprise"
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// export default MapLocation;






// // src/components/MapLocation.jsx
// import React from 'react';
// import './MapLocation.css';

// const MapLocation = () => {
  
//   // Remplacement de l'URL par le code copié depuis Google Maps
//   const embedUrl =  "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3984.4902989745974!2d9.912992219204487!3d2.9613680797298736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2scm!4v1760003839777!5m2!1sen!2scm";

//   return (
//     <div className="map-container">
//       <h3 className="map-title">Où nous trouver ?</h3>
//       <div className="map-responsive">
//         <iframe
//           // Utilisation de l'URL d'intégration fournie
//           src={embedUrl}
          
//           // Les attributs width/height sont mis à 0 dans le JSX 
//           // pour laisser le CSS (map-responsive) gérer la taille et la responsivité.
//           width="0" 
//           height="0"
//           style={{ border: 0 }}
//           allowFullScreen=""
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//           title="Localisation de l'entreprise Dometal"
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// export default MapLocation;



// src/components/MapLocation.jsx ou ModalMap.jsx
import React from 'react';
import { FaTimes } from 'react-icons/fa'; // Icône pour la croix de fermeture
import './MapLocation.css'; // Nous allons mettre à jour ce fichier

// Le composant accepte les props isOpen et onClose
const ModalMap = ({ isOpen, onClose }) => {
  // L'URL d'intégration que vous avez fournie
  const embedUrl =  "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3984.4902989745974!2d9.912992219204487!3d2.9613680797298736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2scm!4v1760003839777!5m2!1sen!2scm";

  if (!isOpen) {
    return null; // N'affiche rien si la modale n'est pas ouverte
  }

  return (
    // L'overlay prend tout l'écran
    <div className="map-modal-overlay" onClick={onClose}>
      {/* La modale s'affiche au centre. L'événement onClick est stoppé ici. */}
      <div 
        className="map-modal-content" 
        onClick={e => e.stopPropagation()} // Empêche la fermeture quand on clique sur la carte
      >
        
        {/* Bouton de fermeture */}
        <button className="modal-close-button" onClick={onClose}>
          <FaTimes />
        </button>

        <h3 className="map-title">Localisation Dometal</h3>
        
        <div className="map-responsive">
          <iframe
            src={embedUrl}
            width="0" 
            height="0"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localisation de l'entreprise Dometal"
          ></iframe>
        </div>
        
        <p className="modal-footer-text">
            Glissez et zoomez pour explorer notre quartier.
        </p>
      </div>
    </div>
  );
};

export default ModalMap;