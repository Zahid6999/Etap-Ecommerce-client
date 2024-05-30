import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Avatar,
} from "@nextui-org/react";
import { RxCross2 } from "react-icons/rx";

export default function WishlistTable({ wishlist }) {
  return (
    <Table aria-label="Example empty table" shadow="none">
      <TableHeader>
        <TableColumn className="text-xl font-semibold text-[#111E2C] leading-7 tracking-[-0.12px]">
          Product
        </TableColumn>
        <TableColumn className="text-xl font-semibold text-[#111E2C] leading-7 tracking-[-0.12px]">
          Price
        </TableColumn>
        <TableColumn className="text-xl font-semibold text-[#111E2C] leading-7 tracking-[-0.12px]">
          Cart
        </TableColumn>
        <TableColumn className="text-xl font-semibold text-[#111E2C] leading-7 tracking-[-0.12px]">
          Product Status
        </TableColumn>
        <TableColumn className="text-xl font-semibold text-[#111E2C] leading-7 tracking-[-0.12px]">
          Remove
        </TableColumn>
      </TableHeader>

      <TableBody>
        {wishlist?.map((wishLi) => (
          <TableRow key={wishLi._id} className="space-y-6">
            <TableCell>
              <div className="flex  gap-4">
                <Avatar
                  isBordered
                  radius="sm"
                  isFocusable
                  size="lg"
                  src={wishLi.img}
                  className="object-cover"
                />
                <div>
                  <h3 className="md:text-base font-bold md:max-w-[240px] md:leading-6 md:tracking-[0.108px] uppercase text-[#111E2C]">
                    {wishLi.title}
                  </h3>
                  <p className="opacity-40">{wishLi.collection}</p>
                </div>
              </div>
            </TableCell>
            <TableCell className="md:text-lg font-semibold md:leading-5 md:tracking-[0.108px] text-[#111E2C]">
              ${wishLi.price}
            </TableCell>
            <TableCell>
              <button className="md:text-base font-semibold md:leading-5 flex gap-3 items-center md:py-[14px] md:px-[30px] bg-inherit hover:shadow-xl duration-300 border-[#111E2C] border rounded-full">
                <span>Add to cart</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="7"
                    viewBox="0 0 20 7"
                    fill="none"
                  >
                    <path
                      d="M18.5 6.01001L13.49 0.990009"
                      stroke="#111E2C"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1.5 6.01001L18.5 6.01001"
                      stroke="#111E2C"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </TableCell>
            <TableCell className="md:text-lg font-semibold md:leading-5 md:tracking-[0.108px] text-[#111E2C]">
              {wishLi.stock.length > 1 ? "(In Stock)" : "(out of stock)"}
            </TableCell>
            <TableCell>
              <button className="border p-4 bg-transparent rounded-full hover:bg-red-600 hover:border-none hover:shadow-2xl hover:text-white duration-400 border-[#111E2C]">
                <RxCross2 className="text-lg"></RxCross2>
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
