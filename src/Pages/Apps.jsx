import React from "react";
import { useLoaderData } from "react-router";
import AllData from "../Componets/AllData/AllData";

const Apps = () => {
  const allData = useLoaderData();
  // console.log(allData)

  return (
    <div>
      <div className="className='max-w-[1400px] mx-auto bg-[#D2D2D2] text-black pt-[80px] grid grid-cols-4 gap-3 p-4">
        {allData.map((oneData) => (
          <AllData key={oneData.id} oneData={oneData}></AllData>
        ))}
      </div>
    </div>
  );
};

export default Apps;
