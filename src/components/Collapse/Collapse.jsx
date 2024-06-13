/** @format */

import { useState, useRef, useEffect } from 'react'; // Import des hooks de base de React
import Chevron from '../../images/vectorBas.png'; // Import de l'image du chevron

// Composant Collapse qui affiche une section repliable avec un titre et un contenu
export default function Collapse(props) {
    const [toggle, setToggle] = useState(false); // Définir l'état du toggle (false par défaut)
    const [heightEl, setHeightEl] = useState(); // Définir l'état de la hauteur du collapse

    const toggleState = () => {
        setToggle(!toggle); // Fonction qui modifie la valeur du toggle au clic
    };

    const refHeight = useRef(); // Référence pour récupérer et conserver la hauteur du collapse déplié

    useEffect(() => {
        setHeightEl(`${refHeight.current.scrollHeight}px`); // Définir la hauteur du collapse déplié au montage du composant
    }, []);

    return (
        // Afficher le collapse replié par défaut et l'ouvrir/fermer au clic
        <div className={`collapse ${props.aboutStyle}`}>
            <div onClick={toggleState} className='collapse__visible'>
                <h2>{props.aboutTitle}</h2>
                <img
                    className={toggle ? 'chevron rotated' : 'chevron'}
                    src={Chevron}
                    alt='chevron'
                />
            </div>
            <div
                ref={refHeight}
                className={toggle ? 'collapse__toggle animated' : 'collapse__toggle'}
                style={{ height: toggle ? `${heightEl}` : '0px' }}
            >
                <div aria-hidden={toggle ? 'true' : 'false'}>{props.aboutText}</div>
            </div>
        </div>
    );
}