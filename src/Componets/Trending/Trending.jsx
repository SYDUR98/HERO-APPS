import React from 'react';
import dowImg from '../../assets/icon-downloads.png'
import ratingImg from '../../assets/icon-ratings.png'
import { Link } from 'react-router';

const Trending = ({tData}) => {
    // console.log(dataone)
    const {id,image,title,reviews,ratingAvg} = tData
    return (
        <Link to={`/detailsapp/${id}`}>
            <div className='max-w-[1400px] mx-auto bg-[#D2D2D2] text-black pt-[20px]'>
            <div>
                <div className='bg-white p-4 rounded-lg'>
                    <img className='rounded-lg' src={image} alt="" />
                    <h4 className='text-[#001931]'>{title}</h4>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-1 text-[#00D390]'>
                             <img className='w-[15px] h-[15px]' src={dowImg} alt="" />
                            <p className='font-bold '>{reviews}</p>
                        </div>
                        <div className='flex items-center gap-1 text-[#FF8811]'>
                             <img className='w-[15px] h-[15px]' src={ratingImg} alt="" />
                            <p>{ratingAvg}</p>
                        </div>
                            
                    </div>

                </div>
            </div>
        </div>
        </Link>
        
    );
};

export default Trending;