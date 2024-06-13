/** @format */
import React from 'react';
import './Banner.scss';

const Banner = ({ text, className }) => {
    return (
        <div className={`banner-container ${className}`}>
            {text && (
                <div className='banner-overlay'>
                    <div className='banner-text-container'>
                        <div>{text}</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Banner;