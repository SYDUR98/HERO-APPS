import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import dowImg from "../../assets/icon-downloads.png";
import ratingImg from "../../assets/icon-ratings.png";
import reviewImg from "../../assets/icon-review.png";

import ResultChart from "../../Componets/ResultChart/ResultChart";
import {
  getStorageData,
  setLocalData,
} from "../../Componets/Utilities/Utilities";

const DetailsApp = () => {
  const allApps = useLoaderData();
  const { id } = useParams();
  const appId = parseInt(id);
  // console.log(allApps)
  const apps = allApps.find((app) => app.id === appId);
  // console.log(apps);
  const {
    image,
    title,
    companyName,
    description,
    downloads,
    ratingAvg,
    reviews,
    ratings,
    size,
  } = apps;


  const [install, setInstall] = useState([]);

  
  useEffect(() => {
    const dataFromStorage = getStorageData() || [];
    setInstall(dataFromStorage);
  }, []);

  
  // useEffect(() => {
  //   console.log("Installed apps:", install);
  // }, [install]);

 
  const btnHandler = (id) => {
    const dataFromStorage = getStorageData() || [];
    if (dataFromStorage.includes(id)) {
      alert("This App is already Installed");
      return;
    }
    setLocalData(id);
    setInstall([...dataFromStorage, id]);
  };

  return (
    <div className="max-w-[1400px] mx-auto bg-[#D2D2D2] text-black p-[60px]">
      <div className="flex gap-10 ">
        <img className="w-2/5" src={image} alt="" />
        <div>
          <h2 className="font-bold text-[40px]">{title}</h2>
          <p className="text-[#627382]">
            Developed By{" "}
            <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">
              {companyName}
            </span>
          </p>
          <div className="w-full border-t border-gray-400 mt-4"></div>

          <div className="flex justify-between items-center gap-6 my-2">
            <div className=" flex flex-col items-center">
              <img className="w-[50px] h-[50px]" src={dowImg} alt="" />
              <p>Downloads</p>
              <p className="font-bold text-center ">{downloads}</p>
            </div>
            <div className="my-3 flex flex-col items-center">
              <img className="w-[50px] h-[50px]" src={ratingImg} alt="" />
              <p>Average Ratings</p>
              <p className="font-bold text-center ">{ratingAvg}</p>
            </div>
            <div className="flex flex-col items-center ">
              <img className="w-[50px] h-[50px]" src={reviewImg} alt="" />
              <p>Total Reviews</p>
              <p className="font-bold text-center ">{reviews}</p>
            </div>
          </div>
          <button
            onClick={() => btnHandler(appId)}
            className={`px-4 py-1 rounded-md mt-4 text-white ${
              install.includes(appId)
                ? "bg-red-400 cursor-not-allowed"
                : "bg-[#00D390]"
            }`}
            disabled={install.includes(appId)} // prevent clicking again
          >
            {install.includes(appId) ? "Installed" : `Install Now (${size} MB)`}
          </button>
        </div>
      </div>
      <div className="border-t-1 border-gray-400 mt-8"></div>
      <ResultChart ratings={ratings}></ResultChart>
      <div className="border-t-1 border-gray-400 mt-8"></div>
      <div className="my-4">
        <h1 className="font-bold text-xl text-[#001931]">Description</h1>
        <p className="text-[#627382] mt-2">{description}</p>
      </div>
    </div>
  );
};

export default DetailsApp;
