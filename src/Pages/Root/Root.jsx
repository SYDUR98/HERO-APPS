import React from 'react';
import Navbar from '../../Componets/Header/Navbar';
import Footer from '../../Componets/Footer/Footer';
import { Outlet } from 'react-router';
import { Suspense } from 'react';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            
            <Outlet></Outlet>
            
            <Footer></Footer>
        </div>
    );
};

export default Root;