/** @format */

// Composant Host qui affiche le nom de l'hôte et sa photo
export default function Host(props) {
    return (
        <aside className='host-comp'>
            <div className='host-name'>{props.hostName}</div> {/* Affichage du nom de l'hôte */}
            <div className='hostPicture'>
                <img src={props.hostPic} alt={props.id} /> {/* Affichage de la photo de l'hôte */}
            </div>
        </aside>
    );
}
