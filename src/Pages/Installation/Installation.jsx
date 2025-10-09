import React, { useEffect, useState } from "react";
import {
  getStorageData,
  setLocalData,
} from "../../Componets/Utilities/Utilities";
import AppBanner from "../../Componets/AppBanner/AppBanner";
import dowImg from "../../assets/icon-downloads.png";
import ratingImg from "../../assets/icon-ratings.png";
import { useLoaderData } from "react-router";

const Installation = () => {
  const allApp = useLoaderData();
  // console.log(allApp)

  const [installedApps, setInstalledApps] = useState([]);
  const [sortedApps, setSortedApps] = useState([]);
  useEffect(() => {
    const dataFromStorage = getStorageData() || [];
    setInstalledApps(dataFromStorage);
  }, []);
  //   console.log(installedApps);

  
  //   console.log(allInstallApp)

  const unstallHander = (id) => {
    // console.log(id)
    const updatedApps = installedApps.filter((app) => app !== id);
    setInstalledApps(updatedApps);
    setLocalData(updatedApps);
  };

  useEffect(() => {
    const filtered = allApp.filter((appData) =>
      installedApps.includes(appData.id)
    );
    setSortedApps(filtered);
  }, [allApp, installedApps]);
  const handleType = (type) => {
    if (type === "up") {
      const sortedByUp = [...sortedApps].sort(
        (a, b) => a.ratingAvg - b.ratingAvg
      );
      setSortedApps(sortedByUp);
    }
    if (type === "down") {
      const sortedByDown = [...sortedApps].sort(
        (a, b) => b.ratingAvg - a.ratingAvg
      );
      setSortedApps(sortedByDown);
    }
  };

  return (
    <div className="max-w-[1400px] mx-auto bg-[#D2D2D2] text-black">
      <AppBanner></AppBanner>
      <div className="px-10 flex justify-between items-center">
        <h2 className="text-[#001931] font-bold text-xl">
          {sortedApps.length} Apps Found
        </h2>

        <div className="my-4 text-center">
          <select
            defaultValue=""
            className="select select-secondary bg-white"
            onChange={(e) => handleType(e.target.value)}
          >
            <option value="" disabled>
              Sort by:
            </option>
            <option value="up">Rating Low to High</option>
            <option value="down">Rating High to Low</option>
          </select>
        </div>
      </div>
      <div className="px-10">{}</div>

      <div className="mx-10 py-4 ">
        {sortedApps.map((app) => (
          <div
            key={app.id}
            className=" flex justify-between items-center px-10 gap-10  py-4 mt-4 bg-white rounded-lg"
          >
            <div className="flex  gap-6">
              <img
                className="max-w-[200px] h-[100px] rounded-lg"
                src={app.image}
                alt=""
              />
              <div className="flex flex-col gap-y-3">
                <p className="font-bold">{app.title}</p>
                <div className="flex items-center gap-6 mt-3">
                  <div className=" flex  items-center gap-2 ">
                    <img className="w-[20px] h-[20px]" src={dowImg} alt="" />
                    <p className="font-bold text-center text-[#00D390]">
                      {app.ratingAvg}
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img className="w-[20px] h-[20px]" src={ratingImg} alt="" />
                    <p className="font-bold text-center text-[#FF8811] ">
                      {app.ratingAvg}
                    </p>
                  </div>
                  <div className="">
                    <p className="text-[#627382]"> {app.size} MB</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <button
                onClick={() => unstallHander(app.id)}
                className="btn btn-success text-white"
              >
                Uninstall
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
