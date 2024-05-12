import React from "react";
import Button from "../../Shared/Navber/Button/Button";
import Card from "./Card";

const collection = [
  {
    title: "Berrier x argavic que flow trail runnung sgirt",
    collection: "jentle/fashion",
    prePrice: "$140.00",
    price: "$120.00",
    img: "https://i.ibb.co/G361fFY/Image.png",
  },
  {
    title: "Berrier x argavic que flow trail runnung sgirt",
    collection: "jentle/fashion",
    prePrice: "$140.00",
    price: "$120.00",
    img: "https://i.ibb.co/L9ch0d2/Image-9.png",
  },
  {
    title: "Berrier x argavic que flow trail runnung sgirt",
    collection: "jentle/fashion",
    prePrice: "$140.00",
    price: "$120.00",
    img: "https://i.ibb.co/mT1G4RD/Image-7.png",
  },
  {
    title: "Berrier x argavic que flow trail runnung sgirt",
    collection: "jentle/fashion",
    prePrice: "$140.00",
    price: "$120.00",
    img: "https://i.ibb.co/pwKRzs0/Image-6.png",
  },
];
const SpotLightCollection = () => {
  return (
    <div className="mt-[60px]">
      <section className="flex justify-between items-center">
        <h1 className="text-5xl md:text-6xl text-[#111E2C] font-semibold md:leading-[72px] md:tracking-[0.6px]">
          2024 Spotlight
        </h1>
        <Button text="All Product"></Button>
      </section>

      <div className="flex flex-wrap gap-4 justify-center mt-5">
        {collection.map((collec, i) => (
          <Card key={i} collec={collec} />
        ))}
      </div>
    </div>
  );
};

export default SpotLightCollection;
