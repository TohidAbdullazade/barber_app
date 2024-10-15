import React from "react";
import pricelist from "../assets/images/pricelist.png";

const PriceList = () => {
  return (
    <div className="flex bg-[#F9F6F2] max-sm:flex-col max-sm:px-4">
      <img src={pricelist} />
      <div className="flex w-full flex-col   py-[70px] px-[165px] max-sm:px-0 max-sm:py-8">
        <h2 className="text-[40px] font-bold max-sm:text-2xl">Qiymətlər </h2>
        <p className="max-sm:text-sm max-sm:w-[95%] w-[80%]  text-gray-400">
          Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut.
        </p>
        <ul className="mt-8">
          <li className="flex items-center justify-between border-t border-[#e0ddd9] py-4">
            <span className="text-xl font-bold">Saç kəsimi</span>
            <span className="text-[#d5a353]">15 AZN</span>
          </li>
          <li className="flex items-center justify-between border-t border-[#e0ddd9] py-4">
            <span className="text-xl font-bold">Təraş</span>
            <span className="text-[#d5a353]">5 AZN</span>
          </li>
          <li className="flex items-center justify-between border-t border-[#e0ddd9] py-4">
            <span className="text-xl font-bold">Saç kəsimi + Təraş</span>
            <span className="text-[#d5a353]">20 AZN</span>
          </li>
          <li className="flex items-center justify-between border-y border-[#e0ddd9]   py-4">
            <span className="text-xl font-bold">Kantların düzəldilməsi</span>
            <span className="text-[#d5a353]">20 AZN</span>
          </li>
        </ul>

        <a
          href="#appointment"
          className="mt-5 border max-sm:pointer-events-none  group text-center rounded-lg p-2.5 duration-300 transition-all ease-in-out hover:bg-[#b58534]  bg-[#D5A353]"
        >
          <button className="group-hover:text-white max-sm:text-white duration-300 transition-all ease-in-out">
            {" "}
            Əlaqə
          </button>
        </a>
      </div>
    </div>
  );
};

export default PriceList;
