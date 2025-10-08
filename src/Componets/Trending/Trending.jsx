import React from 'react';

const Trending = ({tData}) => {
    // console.log(dataone)
    const {image,title,reviews,ratingAvg} = tData
    return (
        <div className='max-w-[1400px] mx-auto bg-[#D2D2D2] text-black pt-[20px]'>
            <div>
                <div className='bg-white p-2 rounded-lg'>
                    <img src={image} alt="" />
                    <h4>{title}</h4>
                    <div>
                        <p>{reviews}</p>
                        <p>{ratingAvg}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Trending;