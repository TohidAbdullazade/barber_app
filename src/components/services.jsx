import React from "react";
import { BsScissors } from "react-icons/bs";
import { GiRazor } from "react-icons/gi";
import bearcut from "../assets/images/bearcut.png";
import haircut from "../assets/images/haircut.png";
import hairstyle from "../assets/images/hairstyle.png";
import minihairwork from "../assets/images/minihairwork.png";

import { GiComb } from "react-icons/gi";
import { TbRazorElectric } from "react-icons/tb";

const Services = () => {
  return (
    <div className="flex flex-col bg-[#F9F6F2] w-full h-[800px] max-sm:h-auto items-center justify-center max-sm:py-5 max-sm:px-4">
      <div className="text-center ">
        <h2 className="text-[40px] font-bold max-sm:text-2xl ">Xidmətlər</h2>
        <div className="w-full flex justify-center">
          <p className=" max-sm:text-[13px] text-xl max-sm:w-full w-[64%]  ">
            Berger Barbershop is an amazing barbershop located in the heart of
            Upper West Side of Manhattan, NY
          </p>
        </div>
      </div>
      <div className="flex max-sm:flex-col gap-5 mt-5 max-sm:w-full">
        <div className="w-[270px] h-[336px] overflow-hidden relative max-sm:w-full group bg-white">
          <div className="absolute flex flex-col items-center max-sm:justify-start max-sm:mt-5  justify-center w-full h-full z-20">
            <span>
              <BsScissors size={50} color="#d5a353" />
            </span>
            <p className="text-center mt-5 text-2xl group-hover:text-[#d5a353] max-sm:text-[#d5a353]">
              Saç kəsimi
            </p>
            <p className="text-center max-sm:text-white max-sm:w-3/4 group-hover:text-white ">
              Lorem ipsum dolor sit amet, te duo labitur dolores.
            </p>
          </div>

          <img
            src={haircut}
            className="absolute w-full max-sm:h-[336px] max-sm:cursor-none max-sm:opacity-100 object-cover object-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
          />
        </div>

        <div className="w-[270px] overflow-hidden h-[336px] relative max-sm:w-full group bg-white">
          <div className="absolute flex flex-col items-center max-sm:justify-start max-sm:mt-5  justify-center w-full h-full z-20">
            <span>
              <GiRazor size={50} color="#d5a353" />
            </span>
            <p className="text-center mt-5 text-2xl group-hover:text-[#d5a353] max-sm:text-[#d5a353]">
              Təraş
            </p>
            <p className="text-center max-sm:text-white max-sm:w-3/4 group-hover:text-white ">
              Lorem ipsum dolor sit amet, te duo labitur dolores.
            </p>
          </div>
          <img
            src={bearcut}
            className="absolute w-full max-sm:h-[336px] max-sm:cursor-none max-sm:opacity-100 object-cover object-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
          />
        </div>
        <div className="w-[270px] overflow-hidden h-[336px] relative max-sm:w-full group bg-white">
          <div className="absolute flex flex-col items-center max-sm:justify-start max-sm:mt-5  justify-center w-full h-full z-20">
            <span>
              <GiComb size={50} color="#d5a353" />
            </span>
            <p className="text-center mt-5 text-2xl group-hover:text-[#d5a353] max-sm:text-[#d5a353]">
              Stil
            </p>
            <p className="text-center max-sm:text-white max-sm:w-3/4 group-hover:text-white ">
              Lorem ipsum dolor sit amet, te duo labitur dolores.
            </p>
          </div>
          <img
            src={hairstyle}
            className="absolute w-full max-sm:h-[336px] max-sm:cursor-none max-sm:opacity-100 object-cover object-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
