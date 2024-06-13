/** @format */

import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Cards/Card';
import { Link } from 'react-router-dom';
import logementsData from '../../data/logements.json';

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(logementsData);
  }, []);

  return (
    <>
      <Banner text='Chez vous, partout et ailleurs' className='home-banner' />
      <div className='cards-container'>
        {data.map((appart, id) => (
          <div className='card_logement' key={id}>
            <Link className='link_card_logement' to={`/logement/${appart.id}`}>
              <Card cover={appart.cover} title={appart.title} />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
