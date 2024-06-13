import React from 'react';
import logo from '../../Images/LOGO.svg';
import Nav from '../Nav/Nav';
import './Header.scss';

const Header = () => {
    return (
        <header className='headerWrap'>
            <figure className='headerWrap__fig'>
                <img className='logo' src={logo} alt="logo de l'agence kasa" />
            </figure>
            <Nav className='nav-header' />
        </header>
    );
};

export default Header;