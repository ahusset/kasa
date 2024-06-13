/** @format */

import Header from './../../components/Header/Header.jsx';
import Footer from './../../components/Footer/Footer.jsx';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div className='App'>
            <Header /> {/* Affichage de l'en-tête */}
            <main>
                <Outlet /> {/* Rendu des composants enfants en fonction de la route actuelle */}
            </main>
            <Footer /> {/* Affichage du pied de page */}
        </div>
    );
};

export default HomeLayout;