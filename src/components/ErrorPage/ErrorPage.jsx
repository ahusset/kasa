/** @format */

import { Link } from 'react-router-dom';

// Composant ErrorPage qui affiche une page d'erreur 404
export default function ErrorPage() {
    return (
        <div className='errorContainer'>
            <p className='errorNumber'>404</p> {/* Numéro de l'erreur */}
            <p className='errorText'>Oups! La page que vous demandez n'existe pas.</p> {/* Message d'erreur */}
            <Link to='/' className='errorLinkHome'>
                Retourner sur la page d’accueil
            </Link> {/* Lien vers la page d'accueil */}
        </div>
    );
}