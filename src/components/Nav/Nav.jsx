/** @format */

import { Link } from 'react-router-dom'; // Importation du composant Link de React Router

// Composant Nav qui affiche la navigation principale
export default function Nav() {
    return (
        <nav className='nav-header'>
            <Link to='/' className='nav-header_link-home'>
                Accueil
            </Link> {/* Lien vers la page d'accueil */}
            <Link to='/about' className='nav-header_link-about'>
                A Propos
            </Link> {/* Lien vers la page À propos */}
        </nav>
    );
}