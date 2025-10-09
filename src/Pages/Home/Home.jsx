import React from 'react';
import Banner from '../../Componets/Banner/Banner';
import Trending from '../../Componets/Trending/Trending';
import { Link, useLoaderData } from 'react-router';

const Home = () => {
    const tDataone = useLoaderData()
    // console.log(dataone)


    return (
        <div>
            <Banner></Banner>
            <div className='max-w-[1400px] mx-auto bg-[#D2D2D2] text-black pt-[80px] grid grid-cols-1 md:grid-cols-4 gap-3 px-10 py-4'>
                {
                    tDataone.map(tData=><Trending key={tData.id} tData={tData}></Trending>)
                }
            </div>
            <div className='max-w-[1400px] bg-[#D2D2D2] mx-auto text-white flex justify-center pt-[20px]  pb-[80px]'>
               <Link to={'/apps'}>
                     <button className='bg-linear-65 from-[#632EE3] to-[#9F62F2] px-2 py-1 rounded-md'>Show All</button>
               </Link>
            </div>
        </div>
    );
};

export default Home;