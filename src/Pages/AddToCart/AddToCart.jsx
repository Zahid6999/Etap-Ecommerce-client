import React, { useState } from "react";
import CartHeader from "./CartHeader";
import { useLoaderData } from "react-router-dom";
import CartDisplay from "./CartDisplay";
import CartCalculate from "./CartCalculate";

const AddToCart = () => {
  const loadedAddToCart = useLoaderData();
  const [addCartData, setAddCartData] = useState(loadedAddToCart);
  return (
    <div>
      <CartHeader />
      <section className="flex flex-col-reverse md:flex-row  justify-center md:justify-between">
        <div className="basis-3/4">
          <CartDisplay addCartData={addCartData}></CartDisplay>
        </div>
        <div className="basis-1/4">
          <CartCalculate></CartCalculate>
        </div>
      </section>
    </div>
  );
};

export default AddToCart;
