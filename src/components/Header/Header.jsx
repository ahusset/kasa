/** @format */

import React from 'react';
import { Link } from 'react-router-dom'; // Importation de Link pour la navigation
import logo from '../../images/LOGO.svg'; // Importation du logo
import Nav from '../Nav/Nav'; // Importation du composant de navigation

// Composant Header qui affiche le logo et la navigation
export default function Header() {
    return (
        <header className='headerWrap'>
            <figure className='headerWrap__fig'>
                <Link to="/"> {/* Envelopper l'image du logo avec Link */}
                    <img className='logo' src={logo} alt="logo de l'agence Kasa" /> {/* Affichage du logo */}
                </Link>
            </figure>
            <Nav className='nav-header' /> {/* Affichage de la navigation */}
        </header>
    );
}
