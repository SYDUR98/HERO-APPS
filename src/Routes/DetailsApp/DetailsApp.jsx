import React from "react";
import { useLoaderData, useParams } from "react-router";
import dowImg from "../../assets/icon-downloads.png";
import ratingImg from "../../assets/icon-ratings.png";
import reviewImg from "../../assets/icon-review.png";

const DetailsApp = () => {
  const allApps = useLoaderData();
  const { id } = useParams();
  const appId = parseInt(id);
  // console.log(allApps)
  const apps = allApps.find((app) => app.id === appId);
  console.log(apps);
  const {
    image,
    title,
    companyName,
    description,
    downloads,
    ratingAvg,
    reviews,
    ratings,
    size
  } = apps;

  return (
    <div className="max-w-[1400px] mx-auto bg-[#D2D2D2] text-black p-[60px]">
      <div className="flex gap-10 ">
        <img className="w-1/4" src={image} alt="" />
        <div>
          <h2 className="font-bold text-[40px]">{title}</h2>
          <p className="text-[#627382]">Developed By <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">{companyName}</span></p>
          <div className=" w-full divider">
            
          </div>
          <div className="flex justify-between items-center">
            <div className="">
              <img className="w-[50px] h-[50px]" src={dowImg} alt="" />
              <p className="font-bold ">{reviews}</p>
            </div>
            <div className="my-3">
              <img className="w-[50px] h-[50px]" src={ratingImg} alt="" />
              <p>{ratingAvg}</p>
            </div>
            <div className=" ">
              <img className="w-[50px] h-[50px]" src={reviewImg} alt="" />
              <p>{ratingAvg}</p>
            </div>
          </div>
          <button className='bg-[#00D390] px-2 py-1 rounded-md'>Install Now (291 MB)</button>
        </div>
        
      </div>
    </div>
  );
};

export default DetailsApp;
