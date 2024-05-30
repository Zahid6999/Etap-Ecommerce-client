import React from "react";
import SortByDropDown from "../PorductPage/SortByDropDown/SortByDropDown";
import { Link } from "react-router-dom";
import { GoChevronRight } from "react-icons/go";
import heart from "../..//assets/Group 79.png";

const WishlistHeader = () => {
  return (
    <div>
      <section className="flex justify-between items-center flex-wrap">
        <p className="text-xl font-semibold leading-6 text-[#111E2C] flex gap-1 active:underline">
          <Link to="/">Home</Link>{" "}
          <span>
            <GoChevronRight className="text-2xl" />
          </span>
          <Link to="/sopping-cart">Sopping Cart</Link>{" "}
        </p>
        <Link to="/wishlist">
          <p className=" flex gap-3 items-center text-lg font-semibold leading-5 py-6 ">
            View Wishlist{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="8"
                viewBox="0 0 19 8"
                fill="none"
              >
                <path
                  d="M18 6.51001L12.99 1.49001"
                  stroke="#111E2C"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 6.51001L18 6.51001"
                  stroke="#111E2C"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="ml-1">
              <img src={heart} alt="" />
            </span>
          </p>
        </Link>
      </section>
      <p className="hidden 3xl:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1574"
          height="2"
          viewBox="0 0 1574 2"
          fill="none"
        >
          <path
            opacity="0.4"
            d="M1 1L1573 0.999863"
            stroke="#111E2C"
            strokeLinecap="round"
            strokeDasharray="4 4"
          />
        </svg>
      </p>
      <section className="flex justify-between items-center mt-[30px] mb-4">
        <h2 className=" text-4xl md:text-6xl font-semibold leading-[72px] tracking-[-0.6px] text-[#111E2C]">
          Your Shopping Cart
        </h2>
        <div className="flex items-center gap-[14px]">
          <p className="text-lg font-semibold leading-5 text-[#111E2C]">
            Sort By
          </p>
          <SortByDropDown></SortByDropDown>
        </div>
      </section>
    </div>
  );
};

export default WishlistHeader;
