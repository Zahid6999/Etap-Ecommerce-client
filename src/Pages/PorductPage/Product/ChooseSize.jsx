import React from "react";

const ChooseSize = () => {
  return (
    <div className="flex flex-wrap gap-2 mt-5">
      <button
        className=" border p-3 border-[#111E2C] rounded-[50px] uppercase  text-[17px]
          font-semibold leading-[22.5px] tracking-[0.096px] text-gray-400 hover:bg-[#111E2C] active:bg-[#111E2C]  hover:text-white active:text-white duration-500"
      >
        xs
      </button>
      <button
        className=" border py-3 px-[18px] border-[#111E2C] rounded-[50px] uppercase  text-[17px]
          font-semibold leading-[22.5px] tracking-[0.096px] text-gray-400 hover:bg-[#111E2C] visited:bg-[#080f15]  hover:text-white active:text-white duration-500"
      >
        s
      </button>
      <button
        className=" border py-3 px-[18px] border-[#111E2C] rounded-[50px] uppercase  text-[17px]
          font-semibold leading-[22.5px] tracking-[0.096px] text-gray-400 hover:bg-[#111E2C] visited:bg-[#080f15]  hover:text-white active:text-white duration-500"
      >
        m
      </button>

      <button
        className=" border py-3 px-[19px] border-[#111E2C] rounded-[50px] uppercase  text-[17px]
          font-semibold leading-[22.5px] tracking-[0.096px] text-gray-400 hover:bg-[#111E2C] visited:bg-[#080f15]  hover:text-white active:text-white duration-500"
      >
        l
      </button>
      <button
        className=" border p-3  border-[#111E2C] rounded-[50px] uppercase  text-[17px]
          font-semibold leading-[22.5px] tracking-[0.096px] text-gray-400 hover:bg-[#111E2C] visited:bg-[#080f15]  hover:text-white active:text-white duration-500"
      >
        xl
      </button>
      <button
        className=" border py-3  px-[7px] border-[#111E2C] rounded-[50px] uppercase  text-[17px]
          font-semibold leading-[22.5px] tracking-[0.096px] text-gray-400 hover:bg-[#111E2C] visited:bg-[#080f15]  hover:text-white active:text-white duration-500"
      >
        xxl
      </button>
    </div>
  );
};

export default ChooseSize;
