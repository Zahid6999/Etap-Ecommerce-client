import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { GoChevronRight } from "react-icons/go";
import heart from "../../../assets/Group 79.png";
import menubar from "../../../assets/Group 80.png";
import SortByDropDown from "../SortByDropDown/SortByDropDown";
import LeftDocument from "../LeftDocument/LeftDocument";
import Range from "./Range";
import ChooseSize from "./ChooseSize";
import SelectColor from "./SelectColor";
import Card from "./Card";
import PaginationPage from "../Pagination/PaginationPage";
import Swal from "sweetalert2";

const Product = () => {
  const allProducts = useLoaderData();
  const [wishlists, setWishlists] = useState("");

  // handle Wishlist
  const handleWishlist = (product) => {
    fetch("http://localhost:5000/wishlist", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId !== product._id) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Chose Wishlist has been saved",
            showConfirmButton: false,
            timer: 1000,
          });
          setWishlists(data.insertedId);
        } else {
          return;
        }
      });
  };

  // handleAddToCart -----------------
  const handleAddToCart = (product) => {
    fetch(`http://localhost:5000/add-to-cart`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            position: "center-start",
            icon: "success",
            toast: true,
            title: "Your Product added",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div>
      <>
        {/* _------------Product page Banner section----------- */}
        <section className="flex justify-between items-center flex-wrap">
          <p className="text-xl font-semibold leading-6 text-[#111E2C] flex gap-1 active:underline">
            <Link to="/">Home</Link>{" "}
            <span>
              <GoChevronRight className="text-2xl" />
            </span>
            <Link to="/products">All Products</Link>{" "}
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
            Etap Collection
          </h2>
          <div className="flex items-center gap-[14px]">
            <p className="text-lg font-semibold leading-5 text-[#111E2C]">
              Sort By
            </p>
            <SortByDropDown></SortByDropDown>
          </div>
        </section>
      </>

      {/* ------------------- Product Items Area start -------------------------- */}

      <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Side bar ba Dropdown */}

        <div className="bg-white rounded-xl shadow-md pt-[19px] pb-[22px] max-w-[381px] col-span-1 h-fit">
          <aside className="flex items-center justify-between px-[21px] mb-3 cursor-pointer">
            <h1 className="text-2xl font-semibold leading-8 tracking-[0.144px]">
              Filter
            </h1>
            <img src={menubar} alt="Menubar" />
          </aside>
          <p className="mb-4 overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="382"
              height="2"
              viewBox="0 0 382 2"
              fill="none"
            >
              <path
                opacity="0.4"
                d="M1 1L381 0.999967"
                stroke="#111E2C"
                strokeLinecap="round"
                strokeDasharray="4 4"
              />
            </svg>
          </p>
          <LeftDocument></LeftDocument>
          <p className="mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="382"
              height="2"
              viewBox="0 0 382 2"
              fill="none"
            >
              <path
                opacity="0.4"
                d="M1 1L381 0.999967"
                stroke="#111E2C"
                strokeLinecap="round"
                strokeDasharray="4 4"
              />
            </svg>
          </p>

          <div className="px-[22px]">
            <h1 className="text-2xl font-semibold leading-8 tracking-[0.144px]">
              Price Range :
            </h1>
            <Range />
          </div>
          <p className="mt-6 overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="382"
              height="2"
              viewBox="0 0 382 2"
              fill="none"
            >
              <path
                opacity="0.4"
                d="M1 1L381 0.999967"
                stroke="#111E2C"
                strokeLinecap="round"
                strokeDasharray="4 4"
              />
            </svg>
          </p>
          <div className="px-[22px] mt-5">
            <h1 className="text-2xl font-semibold leading-8 tracking-[0.144px]">
              Choose Size :
            </h1>
            <ChooseSize />
          </div>
          <p className="mt-6 overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="382"
              height="2"
              viewBox="0 0 382 2"
              fill="none"
            >
              <path
                opacity="0.4"
                d="M1 1L381 0.999967"
                stroke="#111E2C"
                strokeLinecap="round"
                strokeDasharray="4 4"
              />
            </svg>
          </p>
          <div className="px-[22px] mt-5">
            <h1 className="text-2xl font-semibold leading-8 tracking-[0.144px]">
              Dress Style
            </h1>
            <SelectColor />
          </div>
        </div>

        {/* ------------------- Product Items Area start -------------------------- */}
        {/*----------------- Product Area----------------- */}
        <div className="col-span-3">
          <div className="flex flex-wrap justify-center gap-4">
            {allProducts?.map((product) => (
              <Card
                key={product._id}
                product={product}
                handleWishlist={handleWishlist}
                handleAddToCart={handleAddToCart}
                wishlists={wishlists}
              ></Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pagination_______________________________ */}
      <PaginationPage />
    </div>
  );
};

export default Product;
