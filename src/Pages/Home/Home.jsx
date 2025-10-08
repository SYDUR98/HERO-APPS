import React from 'react';
import Banner from '../../Componets/Banner/Banner';
import Trending from '../../Componets/Trending/Trending';
import { useLoaderData } from 'react-router';

const Home = () => {
    const tDataone = useLoaderData()
    // console.log(dataone)


    return (
        <div>
            <Banner></Banner>
            <div className='grid grid-cols-4'>
                {
                    tDataone.map(tData=><Trending tData={tData}></Trending>)
                }
            </div>
        </div>
    );
};

export default Home;