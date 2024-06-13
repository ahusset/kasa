/** @format */

import Banner from '../../components/Banner/Banner';
import Collapse from '../../components/Collapse/Collapse';
import aboutArray from '../../data/aboutSections.json'; // Tableau de données des sections a propos

// Composant de la page "À propos"
export default function About() {
    return (
        <>
            {/* Affichage de la bannière */}
            <Banner className='about-banner' />
            {/* Affichage des sections repliables avec les données du fichier JSON */}
            {aboutArray.map((rule, id) => (
                <Collapse
                    key={id}
                    aboutTitle={rule.aboutTitle}
                    aboutText={rule.aboutText}
                    aboutStyle='about-style'
                />
            ))}
        </>
    );
}
