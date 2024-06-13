/** @format */

import emptyStar from '../../images/emptyStar.png'; // Import de l'image pour une étoile vide
import fullStar from '../../images/star-rate.png'; // Import de l'image pour une étoile pleine

// Composant Rate qui affiche une notation avec des étoiles
export default function Rate({ score }) {
  const stars = [1, 2, 3, 4, 5]; // Tableau représentant les niveaux de notation
  return (
      <div className='rate-comp'>
        {stars.map((level) =>
            score >= level ? (
                // Affichage d'une étoile pleine si le score est supérieur ou égal au niveau actuel
                <img
                    key={level.toString()}
                    className='star'
                    src={fullStar}
                    alt='rating star'
                />
            ) : (
                // Affichage d'une étoile vide si le score est inférieur au niveau actuel
                <img
                    key={level.toString()}
                    className='star'
                    src={emptyStar}
                    alt='rating star'
                />
            )
        )}
      </div>
  );
}