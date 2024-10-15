import React from "react";
import heroImage from "../assets/images/barber_hero.jpg";
import "../index.css";

const Hero = () => {
  return (
    <div className="relative">
      <img className="w-full h-screen max-sm:h-full" src={heroImage} />
      <div className="border-t  border-[rgba(255,255,255,0.1)] flex absolute bottom-0 w-full">
        <div className="w-[611px] max-sm:h-[50px] h-[126px] flex justify-center text-center items-center flex-col border-r max-sm:text-center border-[rgba(255,255,255,0.1)]  max-sm:p-2 max-sm:w-[40%]">
          <p className="text-yellow-400  max-sm:text-[10px] uppercase">Ünvan</p>
          <p className="text-white max-sm:text-[8px] w-1/4 max-sm:w-full ">
            123, New Lenox street Washington, D.C. 60606
          </p>
        </div>

        <div className="w-[611px] max-sm:h-[50px] h-[126px] flex justify-center items-center max-sm:text-center flex-col border-r border-[rgba(255,255,255,0.1)]  max-sm:p-2 max-sm:w-[40%]  py-2">
          <p className="text-yellow-400 max-sm:text-[10px] uppercase">Əlaqə</p>
          <p className="text-white max-sm:text-[8px] mb-[51px]  max-sm:mb-[14px]">
            123-456-7890
          </p>
        </div>

        <div className="w-[611px] max-sm:h-[50px] h-[126px] flex justify-center text-center items-center  flex-col mt-2 max-sm:p-2 max-sm:w-[40%]">
          <p className="text-yellow-400 max-sm:text-[10px] uppercase">
            İş saatları
          </p>
          <p className="text-white max-sm:text-[8px] mb-[51px] max-sm:mb-[18px] w-1/2 max-sm:w-full">
            Monday through Saturday 11 AM - 9 PM Sunday 11 AM - 7 PM
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
