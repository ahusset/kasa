/** @format */

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About/About.jsx';
import FicheLogement from './pages/FicheLogement/FicheLogement.jsx';
import Error from './pages/Error/Error.jsx';
import HomeLayout from './pages/Home/HomeLayout.jsx';
import Home from './pages/Home/Home.jsx';

const RouterApp = () => {
  return (
    <Routes>
      <Route path='/' element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='logement/:id' element={<FicheLogement />} />
        <Route path='*' element={<Error />} />
      </Route>
    </Routes>
  );
};

export default RouterApp;
