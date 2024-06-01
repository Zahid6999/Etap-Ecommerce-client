import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../Shared/Navber/Button/Button";
import Heart from "../../Shared/Navber/Button/Heart";
import { IoHeart } from "react-icons/io5";

const Card = ({ product, handleWishlist, handleAddToCart, wishlists }) => {
  const { title, collection, _id, img, prePrice, price } = product;

  return (
    <div className="max-w-[385px] p-[22px] bg-white rounded-[10px] hover:shadow-2xl duration-700">
      <Link to={`/product/${_id}`}>
        <h1 className="text-xl font-bold leading-7 uppercase text-[#111E2C] mb-[10px]">
          {title}
        </h1>
        <h2 className="text-lg font-semibold leading-[21.6px] tracking-[0.108px uppercase] opacity-40">
          {collection}
        </h2>
        <img src={img} alt="" className=" max-h-[331px] mx-auto " />
      </Link>
      <section className="flex items-center gap-4">
        <p className="text-xl font-bold leading-7 text-[#111E2C] opacity-40 line-through">
          {prePrice}
        </p>
        <p className="text-xl font-bold leading-7 text-[#111E2C] ">{price}</p>
      </section>
      <div className="mt-[22px] flex gap-3 items-center">
        <div onClick={() => handleAddToCart(product)}>
          <Button text="Buy This Product"></Button>
        </div>

        <p onClick={() => handleWishlist(product)}>
          {product._id === wishlists ? (
            <IoHeart className="text-[26px] text-red-500"></IoHeart>
          ) : (
            <Heart />
          )}
        </p>
      </div>
    </div>
  );
};

export default Card;
