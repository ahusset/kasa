/** @format */

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About/About.jsx';
import AccomodationsDetails from './pages/AccomodationsDetails/AccomodationsDetails.jsx';
import Error from './pages/Error/Error.jsx';
import HomeLayout from './pages/Home/HomeLayout.jsx';
import Home from './pages/Home/Home.jsx';

// Composant principal qui définit les routes de l'application
const RouterApp = () => {
    return (
        <Routes>
            {/* Route principale avec un layout spécifique */}
            <Route path='/' element={<HomeLayout />}>
                {/* Route par défaut qui affiche la page d'accueil */}
                <Route index element={<Home />} />
                {/* Route pour la page "About" */}
                <Route path='about' element={<About />} />
                {/* Route dynamique pour les détails d'un logement */}
                <Route path='logement/:id' element={<AccomodationsDetails />} />
                {/* Route wildcard pour gérer les erreurs 404 */}
                <Route path='*' element={<Error />} />
            </Route>
        </Routes>
    );
};

export default RouterApp;