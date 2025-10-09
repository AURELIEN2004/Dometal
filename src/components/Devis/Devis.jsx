
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './Devis.css';

// Importez vos images (vérifiez les chemins)
 import imagePorteRideau from '../../assets/autre/pr2.jpeg'; // Exemple : image de Porte Rideau
 import imageFenetre from '../../assets/fenetre/f6.png'; // Exemple : image de Fenêtre
 import imageEtagere from '../../assets/autre/autre2.jpeg'; // Exemple : image d'Étagère

// ... (devisData et faqData restent inchangées) ...
const devisData = [
  {
    id: 1,
    title: "Porte Rideau en Acier galvanisé",
    image: imagePorteRideau,
    description: "Conception et fabrication de porte rideau de sécurité, galvanisée et laquée.",
    details: (
      <ul>
        <li>Dimensions : 0.2m x 0.3m (largeur x hauteur)</li>
        <li>Matériau : Acier galvanisé épaisseur 8/10e</li>    
        <li>Materiau : Fer plat épaisseur  20cm</li>
        <li>Finition : Thermolaquage (couleur au choix)</li>
        <li>Garantie : 2 ans pièces et main d'œuvre</li>
        <li className="devis-price">Prix estimé (hors pose) : 5 000 XAF la paire</li>
      </ul>
    ),
  },
  {
    id: 2,
    title: "Grille simple pour Fenêtre Moderne",
    image: imageFenetre,
    description: "Fabrication et installation d'une grille design pour fenêtre.",
    details: (
      <ul>
        <li>Dimensions : 1.2m x 1.0m</li>
        <li>Matériau : Acier carré plein 14mm, Corniere de 30mm</li>
        <li>Finition : Antirouille et Peinture époxy noir </li>
        <li>Motif : Design géométrique moderne</li>
        <li>Installation : Scellement sur beton ou sur cadre en Bois</li>
        <li className="devis-price">Prix estimé (fourniture et pose) : 25 000 XAF</li>
      </ul>
    ),
  },
  {
    id: 3,
    title: "Étagère Murale Décorative en Acier",
    image: imageEtagere,
    description: "Création d'un ensemble d'étagères murales sur mesure.",
    details: (
      <ul>
        <li>Dimensions : 1.5m de long (ensemble modulaire)</li>
        <li>Matériau : Tube en acier galvanisé 20x20mm</li>
        <li>Plateaux : Bois massif teinté</li>
        <li>Finition : Vernis mat sur acier et bois</li>
        <li>Fixation : Invisible haute résistance</li>
        <li className="devis-price">Prix estimé (hors pose) : 45 000 XAF</li>
      </ul>
    ),
  },
];
const faqData = [
  {
    id: 1,
    question: "Quels sont vos délais de fabrication ?",
    answer: "Nos délais varient généralement entre 2 et 8 semaines après la validation du devis et la réception de l'acompte, en fonction de la complexité et de la taille du projet.",
  },
  {
    id: 2,
    question: "Proposez-vous une garantie ?",
    answer: "Oui, tous nos travaux de métallerie sont couverts par une garantie décennale (10 ans) sur la structure, et une garantie de 2 ans sur la motorisation et les pièces mobiles.",
  },
  {
    id: 3,
    question: "Intervenez-vous dans toute la région ?",
    answer: "Nous sommes basés à Kribi, mais nous intervenons régulièrement dans toute la région du Sud et du Littoral. Contactez-nous pour vérifier la faisabilité de votre projet en dehors de cette zone.",
  },
  {
    id: 4,
    question: "Réalisez-vous des devis gratuits ?",
    answer: "Absolument ! Le premier contact et l'établissement d'un devis estimatif sont toujours gratuits et sans engagement. Nous pourrons planifier une visite sur site si nécessaire.",
  },
];

const Devis = () => {
  const [openDevisId, setOpenDevisId] = useState(null);
  const [openFaqId, setOpenFaqId] = useState(null);

  const toggleDevis = (id) => {
    setOpenDevisId(openDevisId === id ? null : id);
  };

  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id='devis' className='devis'>
      <div className="container">

        {/* ================================== */}
        {/* SECTION 1 : EXEMPLES DE DEVIS */}
        {/* ================================== */}
        <div className="section-header">
          <h2>Exemples de Devis</h2>
          <p>Voici quelques exemples de prix pour nos réalisations courantes. Ces prix sont indicatifs et dépendent de vos spécifications finales.</p>
        </div>

        <div className="devis-grid">
          {devisData.map((item) => (
            <div key={item.id} className="devis-item">
              <div className="devis-image-container">
                <img src={item.image} alt={item.title} className="devis-image" width={250} height={250}/>
              </div>
              
              <div className="devis-content">
                <h3 className="devis-title">{item.title}</h3>
                <p className="devis-description">{item.description}</p>
                
                {/* Bouton Cliquable pour Dérouler les Détails */}
                <button 
                  className="devis-toggle-btn" 
                  onClick={() => toggleDevis(item.id)}
                  aria-expanded={openDevisId === item.id}
                >
                  {openDevisId === item.id ? 'Masquer les Détails' : 'Voir l\'Exemple de Devis'}
                  {openDevisId === item.id ? <FaChevronUp className="toggle-icon" /> : <FaChevronDown className="toggle-icon" />}
                </button>
                
                {/* Contenu Déroulant (Accordéon) */}
                <div className={`devis-details-area ${openDevisId === item.id ? 'open' : ''}`}>
                  {item.details}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* ================================== */}
        {/* SECTION 2 : QUESTIONS FRÉQUENTES (FAQ) */}
        {/* ================================== */}
        <div className="section-header faq-header">
          <h2>Questions Fréquentes</h2>
        </div>
        
        <div className="faq-container">
          {faqData.map((item) => (
            <div key={item.id} className="faq-item">
              {/* Entête Cliquable */}
              <button 
                className="faq-question" 
                onClick={() => toggleFaq(item.id)}
                aria-expanded={openFaqId === item.id}
              >
                {item.question}
                {/* Icône de flèche qui change d'orientation */}
                {openFaqId === item.id ? <FaChevronUp className="toggle-icon" /> : <FaChevronDown className="toggle-icon" />}
              </button>
              
              {/* Contenu de la Réponse */}
              <div className={`faq-answer-area ${openFaqId === item.id ? 'open' : ''}`}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="cta-devis">
            <p>Un projet spécifique ? Demandez votre devis personnalisé gratuit et sans engagement !</p>
            <a href="#contact" className="btn-cta">Demander un Devis</a>
        </div>

      </div>
    </section>
  );
};

export default Devis;