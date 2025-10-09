// // src/components/Contact.jsx

// import React, { useState } from 'react'; // Importer useState pour gérer l'état
// import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp } from 'react-icons/fa';
// import './Contact.css';

// const Contact = () => {
//   // Définition des coordonnées pour les liens cliquables
//   const PHONE_NUMBER = "+237671197711"; 
//   const DISPLAY_PHONE = "+237 671 197 711";
//   const WHATSAPP_NUMBER = "237671197711"; 
//   const EMAIL_ADDRESS = "feudjioaurelien24@gmail.com";
//   const ADDRESS = "123 Rue Afam-abe, face école Marie Célestin, Kribi, Cameroun";
//   const HORAIRES = "Lun - Ven : 8h00 - 18h00";

//   // État pour afficher le message de résultat (Succès/Erreur/Envoi)
//   const [result, setResult] = useState("");

//   // Clé d'accès fournie par l'utilisateur
//   const ACCESS_KEY = "974f9203-d46c-42e3-94ed-4d9d6c61b1b2";

//   /**
//    * Fonction de soumission du formulaire vers Web3Forms
//    */
//   const onSubmit = async (event) => {
//     event.preventDefault(); // Empêche le rechargement de la page
//     setResult("Envoi en cours..."); // Message d'attente

//     const formData = new FormData(event.target);
    
//     // 1. Ajout de la clé d'accès au corps de la requête
//     formData.append("access_key", ACCESS_KEY);
    
//     // OPTIONNEL : Envoyer le formulaire vers une adresse spécifique
//     // formData.append("subject", "Nouveau message de Dometal (Formulaire de contact)");

//     try {
//       // 2. Envoi des données à l'API de Web3Forms
//       const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         body: formData
//       });
      
//       const data = await response.json();

//       // 3. Traitement de la réponse
//       if (data.success) {
//         setResult("Message envoyé avec succès ! Nous vous recontacterons bientôt.");
//         event.target.reset(); // Réinitialise les champs du formulaire
//       } else {
//         console.error("Erreur Web3Forms:", data);
//         setResult(`Erreur: ${data.message || "Un problème est survenu lors de l'envoi."}`);
//       }
//     } catch (error) {
//         console.error("Erreur de connexion:", error);
//         setResult("Erreur de connexion : Veuillez vérifier votre connexion ou réessayer.");
//     }
//   };


//   return (
//     <section id="contact" className="contact">
//       <div className="container">
        
//         <div className="section-header">
//           <h2>Contactez-Nous</h2>
//           <p>Parlons de votre projet en métallerie sur mesure.</p>
//         </div>
        
//         <div className="contact-content">
          
//           {/* ------------------------------------- */}
//           {/* Colonne 1 : INFORMATIONS DE CONTACT (Liens cliquables) */}
//           {/* ------------------------------------- */}
//           <div className="contact-info">

//             <h3 className="info-title">Nos Coordonnées</h3>

//             {/* LIEN TÉLÉPHONE (tel:) */}
//             <a href={`tel:${PHONE_NUMBER}`} className="contact-link">
//                 <div className="contact-item">
//                   <FaPhone className="contact-icon phone-icon" />
//                   <div>
//                     <h4>Téléphone</h4>
//                     <p>{DISPLAY_PHONE}</p>
//                   </div>
//                 </div>
//             </a>

//             {/* LIEN WHATSAPP (wa.me/) */}
//             <a 
//                 href={`https://wa.me/${WHATSAPP_NUMBER}`} 
//                 target="_blank" 
//                 rel="noopener noreferrer" 
//                 className="contact-link"
//             >
//                 <div className="contact-item">
//                   <FaWhatsapp className="contact-icon whatsapp-icon" />
//                   <div>
//                     <h4>WhatsApp</h4>
//                     <p>{DISPLAY_PHONE}</p>
//                   </div>
//                 </div>
//             </a>
            
//             {/* LIEN EMAIL (mailto:) */}
//             <a href={`mailto:${EMAIL_ADDRESS}`} className="contact-link">
//                 <div className="contact-item">
//                   <FaEnvelope className="contact-icon email-icon" />
//                   <div>
//                     <h4>Email</h4>
//                     <p>{EMAIL_ADDRESS}</p>
//                   </div>
//                 </div>
//             </a>

//             {/* ADRESSE */}
//             <div className="contact-item">
//               <FaMapMarkerAlt className="contact-icon map-icon" />
//               <div>
//                 <h4>Adresse</h4>
//                 <p>{ADDRESS}</p>
//               </div>
//             </div>
            
//             <div className="contact-item">
//               <FaClock className="contact-icon clock-icon" />
//               <div>
//                 <h4>Horaires</h4>
//                 <p>{HORAIRES}</p>
//               </div>
//             </div>
            
//           </div>
          
//           {/* ------------------------------------- */}
//           {/* Colonne 2 : FORMULAIRE DE CONTACT (Intégration Web3Forms) */}
//           {/* ------------------------------------- */}
//           {/* Lier la fonction onSubmit à l'événement onSubmit du formulaire */}
//           <form className="contact-form" onSubmit={onSubmit}>
//             <h3 className="form-title">Envoyez-nous un Message</h3>
            
//             {/* Les attributs 'name' sont cruciaux pour Web3Forms */}
//             <div className="form-row">
//               <input
//                 type="text"
//                 name="name" // Nom du champ
//                 placeholder="Votre Nom"
//                 required
//               />
//               <input
//                 type="email"
//                 name="email" // Nom du champ
//                 placeholder="Votre Email"
//                 required
//               />
//             </div>
            
//             <input
//               type="tel"
//               name="phone" // Nom du champ
//               placeholder="Votre Téléphone (Optionnel)"
//             />
            
//             <input
//               type="text"
//               name="subject" // Nom du champ pour l'objet
//               placeholder="Objet de votre demande (Ex: Devis Porte)"
//             />
            
//             <textarea
//               name="message" // Nom du champ
//               placeholder="Décrivez votre projet en détail..."
//               rows="6"
//               required
//             ></textarea>
            
//             <button 
//               type="submit" 
//               className="btn-submit"
//               // Désactiver le bouton pendant l'envoi pour éviter les soumissions multiples
//               disabled={result === "Envoi en cours..."} 
//             >
//               {result === "Envoi en cours..." ? "Envoi..." : "Envoyer le Message"}
//             </button>

//             {/* Affichage du message de résultat (succès/erreur) */}
//             {result && <span className="form-result-message">{result}</span>}
//           </form>
         
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

// 2 eme parti


// src/components/Contact.jsx

// import React, { useState } from 'react'; 
// import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp } from 'react-icons/fa';
// import './Contact.css';
// // Import du nouveau composant MapLocation
// import MapLocation from './MapLocation'; 

// const Contact = () => {
//   // ... (Vos constantes de coordonnées) ...
//   const PHONE_NUMBER = "+237671197711"; 
//   const DISPLAY_PHONE = "+237 671 197 711";
//   const WHATSAPP_NUMBER = "237671197711"; 
//   const EMAIL_ADDRESS = "feudjioaurelien24@gmail.com";
//   const ADDRESS = "123 Rue Afam-abe, face école Marie Célestin, Kribi, Cameroun";
//   const HORAIRES = "Lun - Ven : 8h00 - 18h00";

//   const [result, setResult] = useState("");
//   const ACCESS_KEY = "974f9203-d46c-42e3-94ed-4d9d6c61b1b2";

//   const onSubmit = async (event) => {
//     // ... (Votre fonction onSubmit de Web3Forms) ...
//     event.preventDefault();
//     setResult("Envoi en cours...");
//     const formData = new FormData(event.target);
//     formData.append("access_key", ACCESS_KEY);
    
//     try {
//       const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         body: formData
//       });
//       const data = await response.json();

//       if (data.success) {
//         setResult("Message envoyé avec succès ! Nous vous recontacterons bientôt.");
//         event.target.reset();
//       } else {
//         console.error("Erreur Web3Forms:", data);
//         setResult(`Erreur: ${data.message || "Un problème est survenu lors de l'envoi."}`);
//       }
//     } catch (error) {
//         console.error("Erreur de connexion:", error);
//         setResult("Erreur de connexion : Veuillez vérifier votre connexion ou réessayer.");
//     }
//   };


//   return (
//     <section id="contact" className="contact">
//       <div className="container">
        
//         <div className="section-header">
//           <h2>Contactez-Nous</h2>
//           <p>Parlons de votre projet en métallerie sur mesure.</p>
//         </div>
        
//         <div className="contact-content">
          
//           {/* Colonne 1 : INFORMATIONS DE CONTACT */}
//           {/* ... (Code des coordonnées) ... */}
//           <div className="contact-info">

//             <h3 className="info-title">Nos Coordonnées</h3>

//             {/* LIEN TÉLÉPHONE (tel:) */}
//             <a href={`tel:${PHONE_NUMBER}`} className="contact-link">
//                 <div className="contact-item">
//                   <FaPhone className="contact-icon phone-icon" />
//                   <div>
//                     <h4>Téléphone</h4>
//                     <p>{DISPLAY_PHONE}</p>
//                   </div>
//                 </div>
//             </a>

//             {/* LIEN WHATSAPP (wa.me/) */}
//             <a 
//                 href={`https://wa.me/${WHATSAPP_NUMBER}`} 
//                 target="_blank" 
//                 rel="noopener noreferrer" 
//                 className="contact-link"
//             >
//                 <div className="contact-item">
//                   <FaWhatsapp className="contact-icon whatsapp-icon" />
//                   <div>
//                     <h4>WhatsApp</h4>
//                     <p>{DISPLAY_PHONE}</p>
//                   </div>
//                 </div>
//             </a>
            
//             {/* LIEN EMAIL (mailto:) */}
//             <a href={`mailto:${EMAIL_ADDRESS}`} className="contact-link">
//                 <div className="contact-item">
//                   <FaEnvelope className="contact-icon email-icon" />
//                   <div>
//                     <h4>Email</h4>
//                     <p>{EMAIL_ADDRESS}</p>
//                   </div>
//                 </div>
//             </a>

//             {/* ADRESSE (Non cliquable) */}
//             <div className="contact-item">
//               <FaMapMarkerAlt className="contact-icon map-icon" />
//               <div>
//                 <h4>Adresse</h4>
//                 <p>{ADDRESS}</p>
//               </div>
//             </div>
            
//             <div className="contact-item">
//               <FaClock className="contact-icon clock-icon" />
//               <div>
//                 <h4>Horaires</h4>
//                 <p>{HORAIRES}</p>
//               </div>
//             </div>
            
//           </div>
          
//           {/* Colonne 2 : FORMULAIRE DE CONTACT */}
//           <form className="contact-form" onSubmit={onSubmit}>
//             <h3 className="form-title">Envoyez-nous un Message</h3>
            
//             <div className="form-row">
//               <input type="text" name="name" placeholder="Votre Nom" required/>
//               <input type="email" name="email" placeholder="Votre Email" required/>
//             </div>
            
//             <input type="tel" name="phone" placeholder="Votre Téléphone (Optionnel)"/>
//             <input type="text" name="subject" placeholder="Objet de votre demande (Ex: Devis Porte)"/>
//             <textarea name="message" placeholder="Décrivez votre projet en détail..." rows="6" required></textarea>
            
//             <button 
//               type="submit" 
//               className="btn-submit"
//               disabled={result === "Envoi en cours..."} 
//             >
//               {result === "Envoi en cours..." ? "Envoi..." : "Envoyer le Message"}
//             </button>

//             {result && <span className="form-result-message">{result}</span>}
//           </form>
         
//         </div>
        
//         {/* ================================== */}
//         {/* INTÉGRATION DE LA CARTE ICI */}
//         {/* ================================== */}
//         <MapLocation />
        
//       </div>
//     </section>
//   );
// };

// export default Contact;

// 3eme parti

// src/components/Contact.jsx

import React, { useState } from 'react'; // <-- Ajout de useState
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp } from 'react-icons/fa';
import { FaMapLocationDot } from "react-icons/fa6";

import './Contact.css';
// Renommage pour plus de clarté
import ModalMap from './MapLocation'; 

const Contact = () => {
  // 1. État pour contrôler l'ouverture/fermeture de la modale de la carte
  const [isMapOpen, setIsMapOpen] = useState(false); 

  // Définition des coordonnées
  const PHONE_NUMBER = "+237671197711"; 
  const DISPLAY_PHONE = "+237 671 197 711";
  const WHATSAPP_NUMBER = "237671197711"; 
  const EMAIL_ADDRESS = "feudjioaurelien24@gmail.com";
  const ADDRESS = "123 Rue Afam-abe, face école Marie Célestin, Kribi, Cameroun";
  const HORAIRES = "Lun - Ven : 8h00 - 18h00"; // Gardé pour la section Horaires existante, si on la réutilise ailleurs

  const [result, setResult] = useState("");
  const ACCESS_KEY = "974f9203-d46c-42e3-94ed-4d9d6c61b1b2";

  // Fonction de soumission de Web3Forms (inchangée)
  const onSubmit = async (event) => {
    // ... (Votre fonction onSubmit de Web3Forms) ...
    event.preventDefault();
    setResult("Envoi en cours...");
    const formData = new FormData(event.target);
    formData.append("access_key", ACCESS_KEY);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();

      if (data.success) {
        setResult("Message envoyé avec succès ! Nous vous recontacterons bientôt.");
        event.target.reset();
      } else {
        console.error("Erreur Web3Forms:", data);
        setResult(`Erreur: ${data.message || "Un problème est survenu lors de l'envoi."}`);
      }
    } catch (error) {
        console.error("Erreur de connexion:", error);
        setResult("Erreur de connexion : Veuillez vérifier votre connexion ou réessayer.");
    }
  };


  return (
    <section id="contact" className="contact">
      <div className="container">
        
        <div className="section-header">
          <h2>Contactez-Nous</h2>
          <p>Parlons de votre projet en métallerie sur mesure.</p>
        </div>
        
        <div className="contact-content">
          
          {/* ------------------------------------- */}
          {/* Colonne 1 : INFORMATIONS DE CONTACT */}
          {/* ------------------------------------- */}
          <div className="contact-info">

            <h3 className="info-title">Nos Coordonnées</h3>

            {/* Téléphone, WhatsApp, Email, Adresse... (Inchagés) */}
            <a href={`tel:${PHONE_NUMBER}`} className="contact-link">
                <div className="contact-item">
                  <FaPhone className="contact-icon phone-icon" />
                  <div>
                    <h4>Téléphone</h4>
                    <p>{DISPLAY_PHONE}</p>
                  </div>
                </div>
            </a>

            <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-link"
            >
                <div className="contact-item">
                  <FaWhatsapp className="contact-icon whatsapp-icon" />
                  <div>
                    <h4>WhatsApp</h4>
                    <p>{DISPLAY_PHONE}</p>
                  </div>
                </div>
            </a>
            
            <a href={`mailto:${EMAIL_ADDRESS}`} className="contact-link">
                <div className="contact-item">
                  <FaEnvelope className="contact-icon email-icon" />
                  <div>
                    <h4>Email</h4>
                    <p>{EMAIL_ADDRESS}</p>
                  </div>
                </div>
            </a>

            {/* ADRESSE (Nous le gardons) */}
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon map-icon" />
              <div>
                <h4>Adresse</h4>
                <p>{ADDRESS}</p>
              </div>
            </div>
            
            {/* 2. NOUVEL ÉLÉMENT : GOOGLE MAPS (Cliquable) */}
            {/* Utilisation de l'icône FaMapMarkerAlt (localisation) et ajout de l'onClick */}
            <div 
                className="contact-item" 
                onClick={() => setIsMapOpen(true)} // <-- Ouvre la modale
            >
              <FaMapLocationDot className="contact-icon map-icon" />
              <div>
                <h4>Localisation</h4>
                <p>Où nous trouver ? (Cliquez pour voir la carte)</p>
              </div>
            </div>
            
          </div>
          
          {/* ------------------------------------- */}
          {/* Colonne 2 : FORMULAIRE DE CONTACT */}
          {/* ------------------------------------- */}
          <form className="contact-form" onSubmit={onSubmit}>
            <h3 className="form-title">Envoyez-nous un Message</h3>
            
            <div className="form-row">
              <input type="text" name="name" placeholder="Votre Nom" required/>
              <input type="email" name="email" placeholder="Votre Email" required/>
            </div>
            
            <input type="tel" name="phone" placeholder="Votre Téléphone (Optionnel)"/>
            <input type="text" name="subject" placeholder="Objet de votre demande (Ex: Devis Porte)"/>
            <textarea name="message" placeholder="Décrivez votre projet en détail..." rows="6" required></textarea>
            
            <button 
              type="submit" 
              className="btn-submit"
              disabled={result === "Envoi en cours..."} 
            >
              {result === "Envoi en cours..." ? "Envoi..." : "Envoyer le Message"}
            </button>

            {result && <span className="form-result-message">{result}</span>}
          </form>
         
        </div>
        
        {/* L'ancien MapLocation est retiré d'ici */}
        
      </div>
      
      {/* 3. Intégration de la modale de la carte */}
      {/* Elle s'affiche conditionnellement si isMapOpen est vrai */}
      <ModalMap 
          isOpen={isMapOpen} 
          onClose={() => setIsMapOpen(false)} // <-- Ferme la modale
      />

    </section>
  );
};

export default Contact;