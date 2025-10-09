import React from 'react';
import errorImg from '../../assets/error-404.png'
import { Link } from 'react-router';
import Navbar from '../../Componets/Header/Navbar';
import Footer from '../../Componets/Footer/Footer';

const ErrorPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='max-w-[1400px] mx-auto bg-[#D2D2D2] text-black flex flex-col items-center p-10'>
            <img src={errorImg} alt="" />
            <p className='text-[#627382]'>Oops, page not found!</p>
            <Link to={"/"}>
                <button className="bg-linear-65 from-[#632EE3] to-[#9F62F2] px-2 py-1 rounded-md mt-4 text-white">
                        Go Back!
                </button>
            </Link>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;