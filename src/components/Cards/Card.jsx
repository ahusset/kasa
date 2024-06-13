/** @format */

// Composant Card qui affiche une carte avec une couverture et un titre
export default function Card({ cover, title }) {
    // Les cartes de locations récupèrent les couvertures et titres en props depuis Home
    return (
        <article className='card-logement'>
            <img src={cover} alt='location' /> {/* Image de couverture de la location */}
            <div className='card-logement__layer'>
                <p className='card-logement__title'>{title}</p> {/* Titre de la location */}
            </div>
        </article>
    );
}