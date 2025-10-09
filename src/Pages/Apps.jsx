import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import AllData from "../Componets/AllData/AllData";

const Apps = () => {
  const allData = useLoaderData();
  // console.log(allData)

  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const filteredData = allData.filter((oneData) =>
    oneData.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-[1400px] mx-auto bg-[#D2D2D2] text-black pt-[80px] pb-[40px]">
      <div className="text-center">
        <h1 className="text-[#001931] font-bold text-3xl">
          Our All Applications
        </h1>
        <p className="text-[#627382] mt-2">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="px-10 flex justify-between items-center">
        <h3 className="font-semibold text-[24px]">
          ({allData.length}) Apps Found
        </h3>
        <label className="input">
          <svg
            className="h-[1em] text-gray-500 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            value={query}
            className="grow bg-white text-black dark:bg-gray-300"
            onChange={(e) => {
              setLoading(true); 
              setQuery(e.target.value); 
              setTimeout(() => setLoading(false), 400);
            }}
            placeholder="Search"
          />
        </label>
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="w-10 h-10 border-4 border-gray-300 border-t-[#632EE3] rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-3 px-10 py-4">
          {filteredData.length > 0 ? (
            filteredData.map((oneData) => (
              <AllData key={oneData.id} oneData={oneData} />
            ))
          ) : (
            <div className="flex justify-center col-span-6">
              <div>
                <p className="text-center text-red-500 font-semibold text-3xl">
                  No App Found
                </p>
                <button
                  onClick={() => setQuery("")}
                  className="bg-linear-65 from-[#632EE3] to-[#9F62F2] px-2 py-1 rounded-md mt-4 text-white"
                >
                  Show All Apps
                </button>
              </div>
            </div>
          )}
        </div>
      )}

    </div>
  );
};

export default Apps;
