import React from 'react';
import Banner from '../Banner/Banner';
import Card from '../Card/Card';
import './Home.scss';
import accommodations from '../../Data/logements.json';

const Home = () => {
    return (
        <div className="home">
            <Banner text="Chez vous, partout et ailleurs" className="home-banner" />
            <div className="card-list">
                {accommodations.map((accommodation) => (
                    <Card
                        key={accommodation.id}
                        title={accommodation.title}
                        image={accommodation.cover}
                        location={accommodation.location}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;