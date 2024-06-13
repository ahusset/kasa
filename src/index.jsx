/** @format */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './style/main.scss';
import RouterApp from './RouterApp';

// Création de la racine pour le rendu de l'application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendu de l'application en mode Strict, avec BrowserRouter pour la gestion des routes
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <RouterApp />
        </BrowserRouter>
    </React.StrictMode>
);
