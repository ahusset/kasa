/** @format */

import { useState } from 'react';
import left from '../../images/vector-left.png';
import right from '../../images/vector-right.png';

// Composant Carrousel qui affiche un carrousel d'images
export default function Carrousel({ slides }) {
  const [current, setCurrent] = useState(0); // Définir l'index du premier slide à 0
  const length = slides.length; // Longueur du tableau de slides

  // Fonction pour passer au slide suivant
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1); // Repartir au premier slide quand on arrive au dernier
  };

  // Fonction pour revenir au slide précédent
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1); // Repartir au dernier slide quand on est au premier
  };

  return (
      <section id='carrousel-container'>
        {/* Afficher les flèches seulement si il y a plus d'un slide */}
        {length > 1 && (
            <img
                src={left} // Image de la flèche gauche
                alt='gauche'
                onClick={prevSlide} // Passer au slide précédent au clic
                className='leftArrow'
            />
        )}
        {length > 1 && (
            <img
                src={right} // Image de la flèche droite
                alt='droite'
                onClick={nextSlide} // Passer au slide suivant au clic
                className='rightArrow'
            />
        )}
        {slides.map((slide, index) => (
            <div
                key={index} // Clé unique pour chaque slide
                className={
                  current === index
                      ? 'slider bl-msk wh-msk active-anim' // Activer l'animation si c'est le slide courant
                      : 'slider bl-msk wh-msk'
                }
            >
              {index === current && <img src={slide} alt='appartement à louer' />} {/* Afficher l'image si c'est le slide courant */}
              {length > 1 && (
                  <span className='slider__number'>
              {current + 1}/{length} {/* Afficher le numéro du slide si il y a plus d'un slide */}
            </span>
              )}
            </div>
        ))}
      </section>
  );
}