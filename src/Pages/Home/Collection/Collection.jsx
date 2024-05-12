import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

import CollectionCard from "./CollectionCard";
import Button from "../../Shared/Navber/Button/Button";

const Collection = () => {
  let tabs = [
    {
      id: "Man Collection",
      label: "Man Collection",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      collection: [
        {
          title: "Berrier x argavic que flow trail runnung sgirt",
          collection: "jentle/fashion",
          prePrice: "$140.00",
          price: "$120.00",
          img: "https://i.ibb.co/xzT7KwJ/Image.png",
        },
        {
          title: "Berrier x argavic que flow trail runnung sgirt",
          collection: "jentle/fashion",
          prePrice: "$140.00",
          price: "$120.00",
          img: "https://i.ibb.co/LhMsJ1Y/Image-5.png",
        },
        {
          title: "Berrier x argavic que flow trail runnung sgirt",
          collection: "jentle/fashion",
          prePrice: "$140.00",
          price: "$120.00",
          img: "https://i.ibb.co/pwKRzs0/Image-6.png",
        },
        {
          title: "Berrier x argavic que flow trail runnung sgirt",
          collection: "jentle/fashion",
          prePrice: "$140.00",
          price: "$120.00",
          img: "https://i.ibb.co/mT1G4RD/Image-7.png",
        },
      ],
    },
    {
      id: "woman",
      label: "Woman",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      collection: [
        {
          title: "Berrier x argavic que flow trail runnung sgirt",
          collection: "woman/fashion",
          prePrice: "$180.00",
          price: "$140.00",
          img: "https://i.ibb.co/4FrsfMm/Image-2.png",
        },
        {
          title: "Berrier x argavic que flow trail runnung sgirt",
          collection: "woman/fashion",
          prePrice: "$140.00",
          price: "$150.00",
          img: "https://i.ibb.co/fGgvNBY/Image-1.png",
        },
        {
          title: "Berrier x argavic que flow trail runnung sgirt",
          collection: "woman/fashion",
          prePrice: "$140.00",
          price: "$150.00",
          img: "https://i.ibb.co/cxkrDjz/Image-3.png",
        },
        {
          title: "Berrier x argavic que flow trail runnung sgirt",
          collection: "woman/fashion",
          prePrice: "$240.00",
          price: "$180.00",
          img: "https://i.ibb.co/RykPF2Q/Image-8.png",
        },
      ],
    },
    {
      id: "kids",
      label: "Kids",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      collection: [
        {
          title: "Berrier x argavic que flow trail runnung sgirt",
          collection: "kids/fashion",
          prePrice: "$180.00",
          price: "$140.00",
          img: "https://i.ibb.co/drvMzwV/04441572400-e1.jpg",
        },
        {
          title: "Berrier x argavic que flow trail runnung sgirt",
          collection: "kids/fashion",
          prePrice: "$140.00",
          price: "$150.00",
          img: "https://i.ibb.co/dp33MyX/pexels-vika-glitter-392079-1619801.jpg",
        },
        {
          title: "Berrier x argavic que flow trail runnung sgirt",
          collection: "kids/fashion",
          prePrice: "$140.00",
          price: "$150.00",
          img: "https://i.ibb.co/Ksg49wB/01880825920-e1.jpg",
        },
        {
          title: "Berrier x argavic que flow trail runnung sgirt",
          collection: "kids/fashion",
          prePrice: "$240.00",
          price: "$180.00",
          img: "https://i.ibb.co/RykPF2Q/Image-8.png",
        },
      ],
    },
  ];
  return (
    <div className=" mt-[80px] mb-[60px]">
      <section className="flex justify-center md:justify-between flex-wrap items-end">
        <h2 className="text-5xl md:text-6xl text-[#111E2C] font-semibold md:leading-[72px] md:tracking-[0.6px] mb-5">
          Etap Collection
        </h2>
        <Button text="All Product"></Button>
      </section>
      <div className="flex w-full flex-col">
        <Tabs aria-label="Dynamic tabs" items={tabs} variant="underlined">
          {(item) => (
            <Tab
              key={item.id}
              title={item.label}
              className="text-[17px] font-semibold leading-[21.6px] tracking-[-0.18px] uppercase"
            >
              <Card className="bg-transparent rounded-none border-none shadow-none">
                <CardBody></CardBody>
                <div className="flex flex-wrap  justify-center items-center gap-4">
                  {item?.collection?.map((collection, i) => (
                    // console.log(collection)
                    <CollectionCard
                      key={i}
                      i={i}
                      collection={collection}
                    ></CollectionCard>
                  ))}
                </div>
              </Card>
            </Tab>
          )}
        </Tabs>
      </div>
    </div>
  );
};

export default Collection;
