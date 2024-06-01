import { Avatar } from "@nextui-org/react";
import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const CartDisplay = ({ addCartData }) => {
  const [count, setCount] = useState(1);
  const [subTotal, setSubTotal] = useState(count);

  //   increment Count------
  const incrementFun = (price, _id) => {
    setCount(count + 1);
    if (price === 1) {
      setSubTotal(price);
    }
    const subTotal = parseInt(price * count);
    setSubTotal(subTotal);
  };
  //   decrement Count------
  const decrementFun = () => setCount(count - 1);
  return (
    <div className="bg-white rounded-xl p-6">
      <table className="w-full ">
        <thead className="py-5">
          <tr>
            <th className="md:text-xl font-semibold text-[#111E2C] md:leading-7 md:tracking-[-0.12px] text-left ">
              Product
            </th>
            <th className="md:text-xl font-semibold text-[#111E2C] md:leading-7 md:tracking-[-0.12px] text-left">
              Price
            </th>
            <th className="md:text-xl font-semibold text-[#111E2C] md:leading-7 md:tracking-[-0.12px] text-left">
              Quantity
            </th>
            <th className="md:text-xl font-semibold text-[#111E2C] md:leading-7 md:tracking-[-0.12px] text-left">
              Sub-total
            </th>
          </tr>
        </thead>

        <tbody>
          {addCartData?.map((addCart) => (
            <tr key={addCart._id}>
              <td>
                <div className="flex  gap-4">
                  <Avatar
                    isBordered
                    radius="sm"
                    isFocusable
                    size="lg"
                    src={addCart.img}
                    className="object-cover"
                  />
                  <div>
                    <h3 className="md:text-base font-bold md:max-w-[240px] md:leading-6 md:tracking-[0.108px] uppercase text-[#111E2C]">
                      {addCart.title}
                    </h3>
                    <p className="opacity-40">{addCart.collection}</p>
                  </div>
                </div>
              </td>
              <td className="md:text-lg font-bold md:leading-5 md:tracking-[0.108px] text-[#111E2C]">
                {addCart.price}
              </td>
              <td>
                <h2 className="flex gap-[10px] items-center">
                  <span
                    className="hover:bg-slate-300  p-1 rounded-2xl duration-250"
                    onClick={decrementFun}
                  >
                    <FiMinus></FiMinus>
                  </span>
                  <span className="bg-[#111E2C] text-white px-[16px] py-2 rounded-[30px] text-sm font-bold leading-[ 18.9px ]">
                    {subTotal}
                  </span>
                  <span
                    className="hover:bg-slate-300  p-1 rounded-2xl duration-250"
                    onClick={() => incrementFun(addCart.price, addCart._id)}
                  >
                    <FiPlus></FiPlus>
                  </span>
                </h2>
              </td>
              <td>${subTotal}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartDisplay;
