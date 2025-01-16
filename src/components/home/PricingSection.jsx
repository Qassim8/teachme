import React from "react";
import PricingCard from "../PricingCard";

function PricingSection() {
    const arr = [1, 4];
  return (
    <div className="py-16">
      <div className="title">
        <h2 className="text-slate-800 text-xl md:text-3xl font-bold">
          Our Pricing
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-600 text-[13px] md:text-[16px] mb-3 md:mb-0">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum,
            numquam cumque. Impedit deleniti dolores magnam. Iure quisquam
            minima, laboriosam nesciunt magnam ex exercitationem eos
          </p>
          <div className="flex items-center gap-3 p-2 md:p-4 bg-white rounded-md">
            <button className="py-1 md:py-3 px-3 md:px-5 text-[13px] md:text-[16px] text-white bg-amber-500 rounded-md cursor-pointer outline-none">
              Monthly
            </button>
            <button className="py-1 md:py-3 px-3 md:px-5 text-[13px] md:text-[16px] text-slate-700 rounded-md cursor-pointer outline-none">
              Yearly
            </button>
          </div>
        </div>
      </div>
      <div className="mt-5 p-3 md:p-10 bg-white grid grid-cols-1 md:grid-cols-2 gap-5">
        {arr.map((e, id) => (
          <PricingCard key={id}/>
        ))}
      </div>
    </div>
  );
}

export default PricingSection;
