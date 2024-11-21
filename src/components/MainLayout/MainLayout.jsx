import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import LatestNews from '../LatestNews/LatestNews';

const MainLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <section>
                <LatestNews></LatestNews>
            </section>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;