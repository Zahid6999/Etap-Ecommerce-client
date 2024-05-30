import React, { useState } from "react";
import { MdChevronRight } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

const leftDocItems = [
  {
    title: "Shirt & Pants",
    submenu: [
      { subTitle: "Cotton" },
      { subTitle: "Febric" },
      { subTitle: "Jents" },
    ],
  },
  {
    title: "Denim Jeans Wear",
    submenu: [{ subTitle: "Cotton" }, { subTitle: "Soft" }],
  },
  {
    title: "Stripe T-shitrt",
    submenu: [{ subTitle: "Cotton" }, { subTitle: "Soft" }],
  },
  {
    title: "Trendy Caps",
    submenu: [{ subTitle: "Cotton" }, { subTitle: "Soft" }],
  },
  {
    title: "Coat and outfits",
    submenu: [{ subTitle: "Cotton" }, { subTitle: "Soft" }],
  },
  {
    title: "Brown Gate Keeper",
    submenu: [{ subTitle: "Cotton" }, { subTitle: "Soft" }],
  },
  {
    title: "Pants",
    submenu: [{ subTitle: "Cotton" }, { subTitle: "Gabbing" }],
  },
  {
    title: "T-shirts",
    submenu: [{ subTitle: "Cotton" }, { subTitle: "Madat" }],
  },
  {
    title: "Knitwear",
    submenu: [{ subTitle: "Cotton" }, { subTitle: "Madat" }],
  },
  {
    title: "Sports Jumpers",
    submenu: [{ subTitle: "Cotton" }, { subTitle: "Madat" }],
  },
];

const LeftDocument = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className=" px-[13px]">
      {leftDocItems?.map((doc, i) => (
        <div key={i}>
          <li
            className={`list-none flex items-center justify-between duration-500 cursor-pointer mb-5 text-lg font-medium leading-[21.6px] capitalize  hover:bg-slate-100 py-2 px-2 rounded-lg`}
            onClick={() => setOpen(!open)}
          >
            {doc.title}
            {open ? (
              <MdKeyboardArrowUp className="text-xl"></MdKeyboardArrowUp>
            ) : (
              <MdChevronRight className="text-xl"></MdChevronRight>
            )}
          </li>
          {doc.submenu.map((sub, i) => (
            <p
              key={i}
              className={` ${
                open ? "" : "hidden"
              } hover:bg-slate-100 py-2 px-2 rounded-lg`}
            >
              {sub.subTitle}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default LeftDocument;
