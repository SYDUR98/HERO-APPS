import React from "react";
import googleImg from "../../assets/google.png";
import cImg from "../../assets/c.png";
import bannerImg from "../../assets/hero.png";

const Banner = () => {
  return (
    <div className="max-w-[1400px] mx-auto bg-[#D2D2D2] text-black pt-[80px]">
      <div>
        <h1 className="text-6xl font-bold text-center">
          We Build <br />{" "}
          <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">
            Productive
          </span>{" "}
          Apps
        </h1>
        <p className="text-center text-[#627382] pt-4">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br /> Our goal is to turn your
          ideas into digital experiences that truly make an impact.
        </p>

        <div className="flex gap-4 justify-center py-10">
          <button className="btn bg-white text-black border-1 border-gray-200">
            <img src={googleImg} alt="" />
            Google Play
          </button>
          <button className="btn bg-white text-black border-1 border-gray-200">
            <img src={cImg} alt="" />
            App Store
          </button>
        </div>
        <div className="flex justify-center">
          <img src={bannerImg} alt="" />
        </div>
        <div className="bg-linear-65 from-[#632EE3] to-[#9F62F2] text-white text-center py-10">
          <h1 className="font-bold text-4xl ">
            Trusted by Millions, Built for You
          </h1>
          <div className="pt-[40px] flex flex-col md:flex-row gap-20 justify-center">
            <div>
              <p>Total Downloads</p>
              <h3 className="font-extrabold text-[64px]">29.6M</h3>
              <p>21% more than last month</p>
            </div>
            <div>
              <p>Total Reviews</p>
              <h3 className="font-extrabold text-[64px]">906K</h3>
              <p>46% more than last month</p>
            </div>
            <div>
              <p>Active Apps</p>
              <h3 className="font-extrabold text-[64px]">132+</h3>
              <p>31 more will Launch</p>
            </div>
          </div>
        </div>
        <div className="text-center pb-6 bg-white max-w-[90%] mx-auto mt-[80px] p-3">
          <h1 className="font-bold text-[40px]">Trending Apps</h1>
          <p className="text-[#627382]">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
