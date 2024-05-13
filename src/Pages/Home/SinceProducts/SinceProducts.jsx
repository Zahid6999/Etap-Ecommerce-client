import React from "react";
import Img1 from "../../../assets/CollectionImg/collection (1).png";
import Img2 from "../../../assets/CollectionImg/collection.png";

const SinceProducts = () => {
  return (
    <div>
      <figure className="flex flex-wrap justify-center gap-[17px] my-[60px] ">
        <img src={Img2} alt="Brand Product" />
        <img src={Img1} alt="Brand Product" />

        <section className="bg-[#2A63E2] py-[30px] px-[27px] rounded-xl max-w-[513px] ">
          <h1 className="text-[40px] font-semibold leading-[49.6px] tracking-[0.8px] text-white capitalize  border-b-[0.5px] border-white pb-10">
            Originated from America our Product Has been Nominate As brand of
            the year.
          </h1>
          <p className="text-2xl text-white font-light leading-[40.8px] lowercase  pt-10 pb-[121px]">
            Street fashion captures the unique styles found in urban
            environments. It compass a mix of individuality, subcultures, and
            current trends. Street style blogs & social media platforms offer a
            window into the diverse and creative fashion choices made by
            everyday people around the world.
          </p>
          <button className="text-lg font-semibold leading-[21.6px] border border-white py-5 bg-inherit text-white px-[49px] flex items-center gap-[10px] rounded-[50px]">
            <span>All Product</span>{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M12.99 7L18 12.02H1"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </section>
      </figure>
    </div>
  );
};

export default SinceProducts;
