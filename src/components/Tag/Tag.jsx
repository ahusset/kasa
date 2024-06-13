/** @format */

// Composant Tag qui affiche un tag sous forme de bouton
export default function Tag(props) {
    return (
        <div className='tagContainer'>
            <span className='tagButton'>{props.tag}</span> {/* Affichage du texte du tag */}
        </div>
    );
}