/** @format */

import logo from '../../images/LOGO.svg'; // Importation du logo
import Nav from '../Nav/Nav'; // Importation du composant de navigation

// Composant Header qui affiche le logo et la navigation
export default function Header() {
    return (
        <header className='headerWrap'>
            <figure className='headerWrap__fig'>
                <img className='logo' src={logo} alt="logo de l'agence Kasa" /> {/* Affichage du logo */}
            </figure>
            <Nav className='nav-header' /> {/* Affichage de la navigation */}
        </header>
    );
}