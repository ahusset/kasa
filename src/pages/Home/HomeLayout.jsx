/** @format */

import Header from './../../components/Header/Header.jsx';
import Footer from './../../components/Footer/Footer.jsx';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <div className='App'>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
