import React from "react";
import { Slider } from "@nextui-org/react";

export default function Range() {
  const [value, setValue] = React.useState([500, 800]);

  return (
    <div className="flex flex-col gap-2 w-full h-full max-w-md items-start justify-center mt-5">
      <Slider
        formatOptions={{ style: "currency", currency: "USD" }}
        step={10}
        maxValue={1000}
        minValue={0}
        value={value}
        size="sm"
        onChange={setValue}
        className="max-w-md"
      />
      <div className="flex flex-wrap gap-32 mt-3">
        <button className="border bg-transparent rounded-full border-[#111E2C] text-base font-semibold leading-[19.2px] px-6 py-[10px] hover:bg-black hover:text-white duration-500">
          {Array.isArray(value) && value.map((v) => `$${v}`).slice(0, 1)}
        </button>
        <button className="border bg-transparent rounded-full border-[#111E2C] text-base font-semibold leading-[19.2px] px-6 py-[10px] hover:bg-black hover:text-white duration-500">
          {Array.isArray(value) && value.map((v) => `$${v}`).slice(1)}
        </button>
      </div>
    </div>
  );
}
