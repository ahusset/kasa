import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './Home/Home';
import About from './About/About';
import NotFound from './NotFound/NotFound';

const AppRouter = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default AppRouter;