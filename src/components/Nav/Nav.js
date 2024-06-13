import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = ({ className }) => {
    return (
        <nav className={className}>
            <Link className={`${className}_link-home`} to="/">Accueil</Link>
            <Link className={`${className}_link-about`} to="/about">À Propos</Link>
        </nav>
    );
};

export default Nav;