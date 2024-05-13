import React from "react";
import { useSwiper } from "swiper/react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const SwiperNavButton = () => {
  const swiper = useSwiper();
  return (
    <div className="mt-6">
      <button
        onClick={() => swiper.slidePrev()}
        className="border p-[18px] rounded-full border-[#111E2C] hover:bg-[#111E2C] hover:text-white duration-400 "
      >
        <GoArrowLeft className="text-2xl " />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="border p-[18px] rounded-full border-[#111E2C] hover:bg-[#111E2C] hover:text-white duration-400  ml-[10px]"
      >
        <GoArrowRight className="text-2xl " />
      </button>
    </div>
  );
};

export default SwiperNavButton;
