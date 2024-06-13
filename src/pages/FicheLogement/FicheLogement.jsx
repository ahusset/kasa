/** @format */

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Carrousel from '../../components/Carrousel/Carrousel';
import Collapse from '../../components/Collapse/Collapse';
import Host from '../../components/Host/Host';
import Rate from '../../components/Rate/Rate';
import Tag from '../../components/Tag/Tag';

import logementsData from '../../data/logements.json';

export default function FicheLogement() {
  const params = useParams();
  const navigate = useNavigate();

  const [pickedAppart, setPickedAppart] = useState(null);

  useEffect(() => {
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
  }, [params.id, navigate]);

  if (!pickedAppart) {
    return null;
  }

  const slidePics = pickedAppart.pictures;
  const tags = pickedAppart.tags;
  const equipments = pickedAppart.equipments;
  const equip = equipments.map((item, index) => (
    <li key={index} className='equipList'>
      {item}
    </li>
  ));

  return (
    <div key={params.id} className='fiche-container'>
      <Carrousel slides={slidePics} />
      <section className='hostInfo-container'>
        <div className='title-tags-container'>
          <div className='title-container redFont'>
            <h1>{pickedAppart.title}</h1>
            <h3>{pickedAppart.location}</h3>
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
            />
          </div>
          <div className='rate-container'>
            <Rate score={pickedAppart.rating} />
          </div>
        </div>
      </section>
      <div className='collapse-fiche-container'>
        <Collapse
          aboutTitle='Description'
          aboutText={pickedAppart.description}
        />
        <Collapse aboutTitle='Équipements' aboutText={<ul>{equip}</ul>} />
      </div>
    </div>
  );
}
