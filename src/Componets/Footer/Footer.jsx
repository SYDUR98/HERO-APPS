import React from "react";
import logoImg from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className="max-w-[1400px] mx-auto text-[#D2D2D2] bg-black px-10 py-4">
      <div className="  flex justify-between items-center">
        <div>
          <a className=" flex items-center gap-2 font-bold">
            <img className="w-[40px] h-[40px]" src={logoImg} alt="" />
            HERO.IO
          </a>
        </div>
        <div>
            <p>Social Links</p>
            <div>
                <img src="" alt="" />
            </div>
        </div>
      </div>
      <div className="text-center">
        <p>Copyright © 2025 - All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
