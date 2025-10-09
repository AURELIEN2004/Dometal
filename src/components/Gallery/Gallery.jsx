

// src/components/Gallery.jsx

import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import './Gallery.css';

// ====================================================
// 1. IMPORTATIONS DES IMAGES (Toutes les images d'assets)
// Le chemin '../../assets/' est basé sur la structure src/components/Gallery.jsx
// ====================================================

// --- Portes (Dossier 'porte') ---
import porte1 from '../../assets/porte/porte1.jpg';
// import porte2 from '../../assets/porte/porte2.jpeg';
import porte3 from '../../assets/porte/porte3.jpeg';
import porte4 from '../../assets/porte/porte4.jpeg';
import porte5 from '../../assets/porte/porte5.jpeg';
import porte6 from '../../assets/porte/porte6.jpeg';
import porte7 from '../../assets/porte/porte7.jpeg';

// --- Fenêtres (Dossier 'fenetre') ---
// import f1 from '../../assets/fenetre/f3.jpeg';
// import f2 from '../../assets/fenetre/f2.jpeg';
import f3 from '../../assets/fenetre/f3.png';
import f4 from '../../assets/fenetre/f4.jpeg'; 
import f5 from '../../assets/fenetre/f5.png';
import f6 from '../../assets/fenetre/f6.jpeg';
import f7 from '../../assets/fenetre/f7.jpeg';
import f8 from '../../assets/fenetre/f8.jpeg';

// --- Portails (Dossier 'portail') ---
// import portail1 from '../../assets/portail/portail1.jpeg';
import portail2 from '../../assets/portail/portail2.jpeg';
import portail3 from '../../assets/portail/portail3.jpeg';
import portail5 from '../../assets/portail/portail5.jpeg';
import portail6 from '../../assets/portail/portail6.png';
import portail7 from '../../assets/portail/portail7.jpeg';
import portail8 from '../../assets/portail/portail8.jpeg';

// --- Autres (Dossier 'autre') ---
import autre1 from '../../assets/autre/autre1.jpeg';
import autre2 from '../../assets/autre/autre2.jpeg';
// import ba1 from '../../assets/autre/ba1.png';
import ba2 from '../../assets/autre/ba2.jpeg';
// import ba3 from '../../assets/autre/ba3.jpeg';
import es from '../../assets/autre/es.jpeg'; 
// import pr from '../../assets/autre/pr.jpeg';
import pr2 from '../../assets/autre/pr2.jpeg';
// import pr3 from '../../assets/autre/pr3.jpeg';
// import sl from '../../assets/autre/sl.png';
// import sl2 from '../../assets/autre/sl2.jpeg';
// import table1 from '../../assets/autre/table1.jpeg';
import table2 from '../../assets/autre/table2.png';


// ====================================================
// 2. COMPOSANT ET DONNÉES PROJECTS
// ====================================================

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  // MODIFICATION 1 : 'Portes' est la catégorie par défaut
  const [selectedCategory, setSelectedCategory] = useState('Portes');
  
  const projects = [
    // --- PORTES ---
    { id: 1, title: "Porte Noire Design", category: "Portes", image: porte1, description: "Porte minimaliste en acier noir mat avec poignée intégrée." },
    // { id: 2, title: "Porte Vitrée et Acier", category: "Portes", image: porte2, description: "Porte d'intérieur ou d'entrée avec grand panneau de verre sécurisé." },
    { id: 3, title: "Porte de Sécurité Classique", category: "Portes", image: porte3, description: "Porte robuste avec motifs géométriques pour une sécurité maximale." },
    { id: 4, title: "Porte Industriel Rustique", category: "Portes", image: porte4, description: "Finition acier brut avec rivets apparents pour un look industriel." },
    { id: 5, title: "Porte Contemporaine", category: "Portes", image: porte5, description: "Design moderne avec des lignes horizontales, finition anthracite." },
    { id: 6, title: "Porte Pivotante", category: "Portes", image: porte6, description: "Système pivotant en acier pour une grande ouverture élégante." },
    { id: 7, title: "Porte de Garage Métallique", category: "Portes", image: porte7, description: "Porte de garage en acier robuste, finition lisse." },
    
    // --- FENÊTRES ---
    // { id: 8, title: "Fenêtre Grille Architecturale", category: "Fenêtres", image: f1, description: "Fenêtre avec grille fine, maximisant la lumière et le style atelier." },
    // { id: 9, title: "Fenêtre Carrée Simple", category: "Fenêtres", image: f2, description: "Châssis simple et discret en acier." },
    { id: 10, title: "Fenêtre de Toit Style Verrière", category: "Fenêtres", image: f3, description: "Grande verrière en acier pour une lumière zénithale." },
    { id: 11, title: "Fenêtre Carrée Simple", category: "Fenêtres", image: f4, description: "Châssis simple et discret en acier." },
    { id: 12, title: "Fenêtre Industrielle Multiple", category: "Fenêtres", image: f5, description: "Série de fenêtres jumelées pour façades complexes." },
    { id: 13, title: "Fenêtre Rétro", category: "Fenêtres", image: f6, description: "Fenêtre en acier avec petit carreau, style ancien." },
    { id: 14, title: "Fenêtre Baie Vitrée", category: "Fenêtres", image: f7, description: "Grande baie vitrée fixe en acier." },
    { id: 15, title: "Fenêtre Ovale", category: "Fenêtres", image: f8, description: "Fenêtre de forme ovale, unique et décorative." },

    // --- PORTAILS ---
    // { id: 16, title: "Portail Coulissant Pieno", category: "Portails", image: portail1, description: "Portail plein en acier, assurant une intimité totale." },
    { id: 17, title: "Portail Coulissant Pieno", category: "Portails", image: portail2, description: "Portail avec parties ajourées et pleines, design moderne." },
    { id: 18, title: "Portail en Tôle Pleine", category: "Portails", image: portail3, description: "Portail noir avec ornementation discrète." },
    { id: 20, title: "Grand Portail Industriel", category: "Portails", image: portail5, description: "Portail très large pour accès de véhicules lourds." },
    { id: 21, title: "Portail Minimaliste", category: "Portails", image: portail6, description: "Portail sans ornements, lignes très épurées." },
    { id: 22, title: " Portail Grille Simple", category: "Portails", image: portail7, description: " Portail de type grille, léger et fonctionnel." },
    { id: 23, title: "Portail en Tôle Découpée", category: "Portails", image: portail8, description: "Portail sur mesure avec motifs découpés au laser." },
    
    // --- AUTRES ACCESSOIRES ('Autre') ---
    // { id: 24, title: "Table Basse Industriel", category: "Autre", image: table1, description: "Table basse sur mesure avec structure en acier et plateau en bois." },
    // { id: 25, title: "Chaise Longue Acier", category: "Autre", image: sl, description: "Chaise longue design en acier, mobilier extérieur." },
    { id: 26, title: "Garde-corps Moderne", category: "Autre", image: ba2, description: "Garde-corps d'escalier ou de balcon en acier noir." },
    { id: 27, title: "Escalier Droit Métallique", category: "Autre", image: es, description: "Escalier autoportant en acier, intérieur ou extérieur." },
    // { id: 28, title: "Rampe d'accès PMR", category: "Autre", image: pr, description: "Rampe d'accès en métal pour personnes à mobilité réduite." },
    // { id: 29, title: "Barrière Extérieure", category: "Autre", image: ba1, description: "Barrière de sécurité pour piscine ou jardin." },
    { id: 30, title: "Mobilier de Jardin Acier", category: "Autre", image: table2, description: "Ensemble table et chaises de jardin en acier traité." },

    // { id: 31, title: "Garde-corps Moderne", category: "Autre", image: ba3, description: "Garde-corps d'escalier ou de balcon en acier noir." },
    { id: 32, title: "support mural décoratif en fer forgé", category: "Autre", image: autre1, description: "suspendre des pots de fleurs, lanternes, des mangeoires à oiseaux." },
    { id: 33, title: "Etagere en Acier", category: "Autre", image: autre2, description: "Etagere pour suspendre vos objets." },
    { id: 34, title: "Porte Rideau", category: "Autre", image: pr2, description: "Porte rideau pour accrocher vos pièces d'étoffe et couvrir vos fenêtre" },
    // { id: 35, title: "Rampe d'accès PMR", category: "Autre", image: pr3, description: "Rampe d'accès en métal pour personnes à mobilité réduite." },
    // { id: 36, title: "Chaise Longue Acier", category: "Autre", image: sl2, description: "Chaise longue design en acier, mobilier extérieur." },

  ];

  // MODIFICATION 2 : Suppression de 'Tous' des catégories affichées
  const categories = ['Portes', 'Fenêtres', 'Portails', 'Autre'];

  // MODIFICATION 3 : La logique de filtrage n'a plus besoin de vérifier 'Tous'
  // Si vous voulez afficher TOUS les projets quand 'Portes' est sélectionné par défaut,
  // il faudrait changer la logique, mais si vous voulez seulement les 'Portes',
  // la logique actuelle de filter() fonctionne car selectedCategory = 'Portes'.
  const filteredProjects = projects.filter(project => project.category === selectedCategory);

  const openModal = (project) => {
    setSelectedImage(project);
    document.body.style.overflow = 'hidden'; 
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset'; 
  };

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-header">
          <h2>Nos Réalisations</h2>
          <p>Découvrez notre expertise à travers nos projets</p>
        </div>
        
        {/* BARRE DE FILTRAGE */}
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category}
              className={selectedCategory === category ? 'active' : ''}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="gallery-grid">
          {filteredProjects.map(project => ( 
            <div 
              key={project.id} 
              className="gallery-item"
              onClick={() => openModal(project)}
            >
              <img src={project.image} alt={project.title} />
              <div className="gallery-overlay">
                <h3>{project.title}</h3>
                <p>{project.category}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* MODALE */}
        {selectedImage && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>
                <FaTimes />
              </button>
              <img src={selectedImage.image} alt={selectedImage.title} />
              <div className="modal-info">
                <h3>{selectedImage.title}</h3>
                <p>{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>

     <div className="plus">
          <p>pour voir plus de projet</p>              
            <button 
              className="btn-secondary"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Contactez Nous
            </button>
      </div>

    </section>
  );
};

export default Gallery;