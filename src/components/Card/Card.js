import React from 'react';
import './Card.scss';

const Card = ({ title, image, location }) => {
    return (
        <div className="card">
            <img src={image} alt={title} />
            <div className="card-info">
                <h2>{title}</h2>
                <p>{location}</p>
            </div>
        </div>
    );
};

export default Card;