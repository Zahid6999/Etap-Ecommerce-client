import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { GoChevronRight } from "react-icons/go";
import { TiStarFullOutline } from "react-icons/ti";
import { Link, useLoaderData } from "react-router-dom";
import ChooseSize from "../Product/ChooseSize";
import SelectColor from "../Product/SelectColor";

const SingleProduct = () => {
  const loadedProduct = useLoaderData();
  const [product, setProduct] = useState(loadedProduct);
  const { collection, img, _id, title, prePrice, price, rating, stock } =
    product;
  console.log(product);
  return (
    <div>
      <nav className="flex justify-between items-center flex-wrap my-4">
        <p className="text-xl font-semibold leading-6 text-[#111E2C] flex gap-1 active:underline">
          <Link to="/">Home</Link>{" "}
          <span>
            <GoChevronRight className="text-2xl" />
          </span>
          <Link to="/products">MAN COLLECTION</Link>
          <span>
            <GoChevronRight className="text-2xl" />
          </span>
          <span>{title}</span>{" "}
        </p>

        <p className="cursor-pointer text-lg font-semibold leading-5 text-[#111E2C] flex gap-4 items-center">
          <span>Share</span>
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
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <circle cx="24" cy="24" r="24" fill="white" />
              <path
                d="M34 17.1176C33.2639 17.4882 32.4704 17.7318 31.6482 17.8482C32.4895 17.2871 33.1396 16.3976 33.4455 15.3282C32.652 15.8576 31.7725 16.2282 30.8451 16.44C30.0899 15.5294 29.0287 15 27.8241 15C25.5774 15 23.7419 17.0329 23.7419 19.5424C23.7419 19.9024 23.7801 20.2518 23.847 20.58C20.4436 20.3894 17.413 18.5788 15.3958 15.8365C15.0421 16.5035 14.8413 17.2871 14.8413 18.1129C14.8413 19.6906 15.5583 21.0882 16.6673 21.8824C15.9885 21.8824 15.3576 21.6706 14.8031 21.3529V21.3847C14.8031 23.5871 16.218 25.4294 18.0918 25.8424C17.4902 26.0247 16.8586 26.0501 16.2467 25.9165C16.5063 26.8191 17.0149 27.6089 17.7008 28.1749C18.3867 28.7408 19.2155 29.0545 20.0707 29.0718C18.6211 30.3428 16.8241 31.0299 14.9751 31.02C14.6501 31.02 14.325 30.9988 14 30.9565C15.8164 32.2482 17.9771 33 20.2906 33C27.8241 33 31.9637 26.0753 31.9637 20.0718C31.9637 19.8706 31.9637 19.68 31.9541 19.4788C32.7572 18.8435 33.4455 18.0388 34 17.1176Z"
                fill="#111E2C"
              />
            </svg>
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <circle cx="24" cy="24" r="24" fill="white" />
              <path
                d="M26.56 24C26.56 24.5063 26.4099 25.0013 26.1286 25.4223C25.8473 25.8432 25.4474 26.1714 24.9797 26.3651C24.5119 26.5589 23.9972 26.6096 23.5006 26.5108C23.004 26.412 22.5478 26.1682 22.1898 25.8102C21.8318 25.4522 21.588 24.996 21.4892 24.4994C21.3904 24.0028 21.4411 23.4881 21.6349 23.0203C21.8286 22.5526 22.1568 22.1527 22.5777 21.8714C22.9987 21.5901 23.4937 21.44 24 21.44C24.6783 21.4421 25.3282 21.7125 25.8079 22.1921C26.2875 22.6718 26.5579 23.3217 26.56 24ZM32 20.48V27.52C32 28.7082 31.528 29.8477 30.6878 30.6878C29.8477 31.528 28.7082 32 27.52 32H20.48C19.2918 32 18.1523 31.528 17.3122 30.6878C16.472 29.8477 16 28.7082 16 27.52V20.48C16 19.2918 16.472 18.1523 17.3122 17.3122C18.1523 16.472 19.2918 16 20.48 16H27.52C28.7082 16 29.8477 16.472 30.6878 17.3122C31.528 18.1523 32 19.2918 32 20.48ZM27.84 24C27.84 23.2405 27.6148 22.4981 27.1928 21.8666C26.7709 21.2351 26.1712 20.7429 25.4695 20.4523C24.7678 20.1617 23.9957 20.0856 23.2509 20.2338C22.506 20.382 21.8217 20.7477 21.2847 21.2847C20.7477 21.8217 20.382 22.506 20.2338 23.2509C20.0856 23.9957 20.1617 24.7678 20.4523 25.4695C20.7429 26.1712 21.2351 26.7709 21.8666 27.1928C22.4981 27.6148 23.2405 27.84 24 27.84C25.0184 27.84 25.9952 27.4354 26.7153 26.7153C27.4354 25.9952 27.84 25.0184 27.84 24ZM29.12 19.84C29.12 19.6501 29.0637 19.4645 28.9582 19.3067C28.8527 19.1488 28.7028 19.0257 28.5274 18.9531C28.352 18.8804 28.1589 18.8614 27.9727 18.8984C27.7865 18.9355 27.6154 19.0269 27.4812 19.1612C27.3469 19.2954 27.2555 19.4665 27.2184 19.6527C27.1814 19.8389 27.2004 20.032 27.2731 20.2074C27.3457 20.3828 27.4688 20.5327 27.6267 20.6382C27.7845 20.7437 27.9701 20.8 28.16 20.8C28.4146 20.8 28.6588 20.6989 28.8388 20.5188C29.0189 20.3388 29.12 20.0946 29.12 19.84Z"
                fill="#111E2C"
              />
            </svg>
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <circle cx="24" cy="24" r="24" fill="white" />
              <path
                d="M28.1071 18.5067C27.4968 17.813 27.1605 16.9222 27.1607 16H24.4018V27.0222C24.3805 27.6187 24.1276 28.1837 23.6962 28.5982C23.2649 29.0127 22.6888 29.2444 22.0893 29.2444C20.8214 29.2444 19.7679 28.2133 19.7679 26.9333C19.7679 25.4044 21.25 24.2578 22.7768 24.7289V21.92C19.6964 21.5111 17 23.8933 17 26.9333C17 29.8933 19.4643 32 22.0804 32C24.8839 32 27.1607 29.7333 27.1607 26.9333V21.3422C28.2795 22.1421 29.6226 22.5712 31 22.5689V19.8222C31 19.8222 29.3214 19.9022 28.1071 18.5067Z"
                fill="#111E2C"
              />
            </svg>
          </span>
        </p>
      </nav>
      <p className="overflow-hidden mb-3">
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
      <section className="flex flex-wrap gap-5">
        <figure className=" bg-white max-w-[781px] rounded-xl p-5 w-full ">
          <img src={img} alt="Product Image" />
          <h2 className="text-3xl font-semibold">{collection}</h2>
        </figure>
        <div className="max-w-[780px] bg-white rounded-xl p-[22px]">
          <h6 className="text-xl uppercase text-[var(--black)] font-bold leading-7 tracking-[-0.2px]">
            summer/Trendy
          </h6>
          <h2 className="text-6xl capitalize font-semibold text-[var(--black)] max-w-[701px] leading-[72px] tracking-[-0.6px]">
            {title}
          </h2>
          <p className="text-xl font-semibold leading-[0.12px] flex gap-3 items-center mt-4">
            <span>
              <TiStarFullOutline className="text-xl " />
            </span>
            <span className="opacity-[0.6]">{rating} Rating</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7"
                height="6"
                viewBox="0 0 7 6"
                fill="none"
              >
                <circle
                  opacity="0.4"
                  cx="3.23438"
                  cy="3"
                  r="3"
                  fill="#111E2C"
                />
              </svg>
            </span>
            <span className="opacity-[0.6]">{stock} In Stoke</span>
          </p>
          <p className="overflow-hidden mt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="737"
              height="2"
              viewBox="0 0 737 2"
              fill="none"
            >
              <path
                opacity="0.4"
                d="M1 1L736 0.999936"
                stroke="#111E2C"
                strokeLinecap="round"
                strokeDasharray="4 4"
              />
            </svg>
          </p>
          <article className="flex justify-between py-6">
            <div>
              <h4 className="text-2xl font-semibold leading-8 tracking-[0.144px] flex gap-x-5">
                Choose Size :{" "}
                <span className="opacity-[0.4] flex gap-2">
                  Size Guide <FaAngleRight />{" "}
                </span>
              </h4>
              <ChooseSize />
            </div>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2"
                height="98"
                viewBox="0 0 2 98"
                fill="none"
              >
                <path
                  opacity="0.4"
                  d="M1 1L0.999996 97"
                  stroke="#111E2C"
                  strokeLinecap="round"
                  strokeDasharray="4 4"
                />
              </svg>
            </p>
            <div>
              <h4 className="text-2xl font-semibold leading-8 tracking-[0.144px] ">
                Colors Available
              </h4>
              <SelectColor />
            </div>
          </article>
          <p className="overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="737"
              height="2"
              viewBox="0 0 737 2"
              fill="none"
            >
              <path
                opacity="0.4"
                d="M1 1L736 0.999936"
                stroke="#111E2C"
                strokeLinecap="round"
                strokeDasharray="4 4"
              />
            </svg>
          </p>

          <fieldset>
            <h3 className="text-2xl font-semibold mt-6 mb-4 leading-[33.6px] tracking-[0.144px]">
              {" "}
              Updated Price
            </h3>
            <p className="text-4xl font-semibold leading-[55.2px] tracking-[0.276px]">
              <span className="line-through opacity-[0.4] mr-5">
                {prePrice}
              </span>{" "}
              <span>{price}</span>
            </p>
          </fieldset>
        </div>
      </section>
    </div>
  );
};

export default SingleProduct;
