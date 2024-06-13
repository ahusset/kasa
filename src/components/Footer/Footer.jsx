/** @format */

import logo from '../../images/logo-footer.svg'; // Importation du logo du footer

// Composant Footer qui affiche le logo et un texte de copyright
export default function Footer() {
    return (
        <footer className='foot-container'>
            <img src={logo} alt='logo de Kasa' /> {/* Affichage du logo */}
            <p className='foot-container__text'>
                © 2024 Kasa. All rights reserved
            </p> {/* Texte de copyright */}
        </footer>
    );
}