/** @format */

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Carrousel from '../../components/Carrousel/Carrousel';
import Collapse from '../../components/Collapse/Collapse';
import Host from '../../components/Host/Host';
import Rate from '../../components/Rate/Rate';
import Tag from '../../components/Tag/Tag';

import logementsData from '../../data/logements.json';

// Composant pour afficher les détails d'un logement
export default function AccomodationsDetails() {
  const params = useParams(); // Récupère les paramètres de la route
  const navigate = useNavigate(); // Permet de naviguer programmatique

  const [pickedAppart, setPickedAppart] = useState(null); // État pour stocker les données du logement sélectionné

  useEffect(() => {
    // Fonction pour récupérer les données du logement sélectionné
    const fetchData = () => {
      try {
        const picked = logementsData.find((item) => item.id === params.id);

        if (!picked) {
          navigate('404', { state: { message: "Can't get data" } });
        } else {
          setPickedAppart(picked);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        navigate('404', { state: { message: "Can't get data" } });
      }
    };

    fetchData();
  }, [params.id, navigate]); // Dépendances pour réexécuter l'effet lorsque l'ID change

  if (!pickedAppart) {
    return null; // Retourne null si le logement n'est pas trouvé ou en cours de chargement
  }

  const slidePics = pickedAppart.pictures; // Photos du logement pour le carrousel
  const tags = pickedAppart.tags; // Tags du logement
  const equipments = pickedAppart.equipments; // Équipements du logement
  const equip = equipments.map((item, index) => (
      <li key={index} className='equipList'>
        {item}
      </li>
  )); // Convertit les équipements en une liste d'éléments

  return (
      <div key={params.id} className='fiche-container'>
        <Carrousel slides={slidePics} /> {/* Affichage du carrousel de photos */}
        <section className='hostInfo-container'>
          <div className='title-tags-container'>
            <div className='title-container redFont'>
              <h1>{pickedAppart.title}</h1> {/* Titre du logement */}
              <h3>{pickedAppart.location}</h3> {/* Localisation du logement */}
            </div>
            <div className='tags-container'>
              {tags.map((tag) => (
                  <Tag key={tag} tag={tag} />
                ))}
            </div>
          </div>
          <div className='rate-host-container'>
            <div className='host-container redFont'>
              <Host
                  hostName={pickedAppart.host.name}
                  hostPic={pickedAppart.host.picture}
              /> {/* Informations sur l'hôte */}
            </div>
            <div className='rate-container'>
              <Rate score={pickedAppart.rating} /> {/* Affichage de la note */}
            </div>
          </div>
        </section>
        <div className='collapse-fiche-container'>
          <Collapse
              aboutTitle='Description'
              aboutText={pickedAppart.description}
          /> {/* Section repliable pour la description */}
          <Collapse aboutTitle='Équipements' aboutText={<ul>{equip}</ul>} /> {/* Section repliable pour les équipements */}
        </div>
      </div>
  );
}