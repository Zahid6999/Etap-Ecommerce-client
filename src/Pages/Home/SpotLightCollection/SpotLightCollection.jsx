import React, { useEffect, useState } from "react";
import Button from "../../Shared/Navber/Button/Button";
import Card from "./Card";
import { Link } from "react-router-dom";

// const collection = [
//   {
//     title: "Berrier x argavic que flow trail runnung sgirt",
//     collection: "jentle/fashion",
//     prePrice: "$140.00",
//     price: "$120.00",
//     img: "https://i.ibb.co/G361fFY/Image.png",
//     rating: "3.5",
//     stock: "1.3k",
//   },
//   {
//     title: "Berrier x argavic que flow trail runnung sgirt",
//     collection: "jentle/fashion",
//     prePrice: "$140.00",
//     price: "$120.00",
//     img: "https://i.ibb.co/L9ch0d2/Image-9.png",
//     rating: "3.5",
//     stock: "1.3k",
//   },
//   {
//     title: "Berrier x argavic que flow trail runnung sgirt",
//     collection: "jentle/fashion",
//     prePrice: "$140.00",
//     price: "$120.00",
//     img: "https://i.ibb.co/mT1G4RD/Image-7.png",
//     rating: "3.5",
//     stock: "1.3k",
//   },
//   {
//     title: "Berrier x argavic que flow trail runnung sgirt",
//     collection: "jentle/fashion",
//     prePrice: "$140.00",
//     price: "$120.00",
//     img: "https://i.ibb.co/pwKRzs0/Image-6.png",
//     rating: "3.5",
//     stock: "1.3k",
//   },
// ];

const SpotLightCollection = () => {
  const [collection, setCollection] = useState([]);
  useEffect(() => {
    async function load() {
      const resColl = await fetch("http://localhost:5000/products");
      const data = await resColl.json();
      setCollection(data);
    }
    load();
  }, []);
  return (
    <div className="mt-[60px]">
      <section className="flex justify-between items-center">
        <h1 className="text-5xl md:text-6xl text-[#111E2C] font-semibold md:leading-[72px] md:tracking-[0.6px]">
          2024 Spotlight
        </h1>
        <Link to="/products">
          <Button text="All Product"></Button>
        </Link>
      </section>

      <div className="flex flex-wrap gap-4 justify-center mt-5">
        {collection?.slice(4, 8)?.map((collec, i) => (
          <Card key={i} collec={collec} />
        ))}
      </div>
    </div>
  );
};

export default SpotLightCollection;
