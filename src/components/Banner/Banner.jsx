/** @format */

import React from 'react';

export default function Banner({ text, className }) {
    return (
        <div className={`banner-wrapper ${className}`}>
            {/* Overlay semi-transparent */}
            <div className="banner-overlay">
                {/* Affichage du texte si fourni */}
                {text && (
                    <div className='banner-text-container'>
                        <div>{text}</div>
                    </div>
                )}
            </div>
        </div>
    );
}