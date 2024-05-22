import React from "react";

const SelectColor = () => {
  return (
    <div className="flex gap-[30px] mt-4">
      <p className="h-5 w-5 bg-[#A8F9FF] rounded-full cursor-pointer  focus:ring focus:ring-black"></p>
      <p className="h-5 w-5 bg-[#FF6C4B] rounded-full cursor-pointer  focus:outline"></p>
      <p className="h-5 w-5 bg-[#D67F3B] rounded-full cursor-pointer  focus:outline"></p>
      <p className="h-5 w-5 bg-[#47BC4E] rounded-full cursor-pointer  focus:outline"></p>
      <p className="h-5 w-5 bg-[#EA4646] rounded-full cursor-pointer  focus:outline"></p>
      <p className="h-5 w-5 bg-[#32B7F7] rounded-full cursor-pointer  focus:outline"></p>
      <p className="h-5 w-5 bg-[#FFE454] rounded-full cursor-pointer  focus:outline"></p>
    </div>
  );
};

export default SelectColor;
