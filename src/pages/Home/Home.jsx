/** @format */

import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Cards/Card';
import { Link } from 'react-router-dom';
import accomodations from '../../data/logements.json';

// Composant de la page d'accueil
export default function Home() {
    const [data, setData] = useState([]);

    // Chargement des données de logements lors du montage du composant
    useEffect(() => {
        setData(accomodations);
    }, []);

    return (
        <>
            {/* Affichage de la bannière */}
            <Banner text='Chez vous, partout et ailleurs' className='home-banner' />
            {/* Conteneur des cartes de logements */}
            <div className='cards-container'>
                {data.map((appart, id) => (
                    <div className='card_logement' key={id}>
                        {/* Lien vers la page de détail du logement */}
                        <Link className='link_card_logement' to={`/logement/${appart.id}`}>
                            <Card cover={appart.cover} title={appart.title} />
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
}