import { Link } from "react-router-dom";
import Button from "../../Shared/Navber/Button/Button";
import Heart from "../../Shared/Navber/Button/Heart";

const CollectionCard = ({ collection, i }) => {
  const { title, img, prePrice, price, collection: brand } = collection;

  return (
    <div className="max-w-[381px] p-[22px] bg-white rounded-[10px]">
      <h1 className="text-xl font-bold leading-7 uppercase text-[#111E2C] mb-[10px]">
        {title}
      </h1>
      <h2 className="text-lg font-semibold leading-[21.6px] tracking-[0.108px uppercase] opacity-40">
        {brand}
      </h2>
      <img src={img} alt="" className=" max-h-[331px] mx-auto " />
      <section className="flex items-center gap-4">
        <p className="text-xl font-bold leading-7 text-[#111E2C] opacity-40">
          {prePrice}
        </p>
        <p className="text-xl font-bold leading-7 text-[#111E2C] ">{price}</p>
      </section>
      <div className="mt-[22px] flex gap-3">
        <Link to={`${i}`}>
          <Button text="Buy This Product"></Button>
        </Link>
        <Heart></Heart>
      </div>
    </div>
  );
};

export default CollectionCard;
