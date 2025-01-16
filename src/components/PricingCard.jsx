import React from "react";

function PricingCard() {
  return (
    <div className="p-2 md:p-7 bg-slate-50 rounded-lg ">
      <div className="py-2 bg-amber-50 rounded-md border border-amber-100 md:text-lg font-semibold text-center">
        Free Plan
      </div>
      <h2 className="text-center font-bold text-[30px] md:text-[60px] my-5">
        $0<span className="text-slate-500 text-[18px] font-normal">/month</span>
      </h2>
      <div className="text-center bg-white rounded-md overflow-hidden">
        <h3 className="font-semibold text-lg mt-5">Aviladble Features</h3>
        <ul className="flex flex-col gap-5 p-3 md:p-10">
          <li className="flex md:items-center gap-2 p-3 border border-slate-200 rounded-md">
            <div className="w-[20px] md:w-[30px] h-[20px] md:h-[30px] bg-amber-50 text-slate-800 flex justify-center items-center rounded-md">
              <i className="bi bi-check"></i>
            </div>
            <p className="text-[13px] md:text-[16px]">Access to selected free courses.</p>
          </li>
          <li className="flex md:items-center gap-2 p-3 border border-slate-200 rounded-md">
            <div className="w-[20px] md:w-[30px] h-[20px] md:h-[30px] bg-amber-50 text-slate-800 flex justify-center items-center rounded-md">
              <i className="bi bi-check"></i>
            </div>
            <p className="text-[13px] md:text-[16px]">Limited course materials and resources.</p>
          </li>
          <li className="flex md:items-center gap-2 p-3 border border-slate-200 rounded-md">
            <div className="w-[20px] md:w-[30px] h-[20px] md:h-[30px] bg-amber-50 text-slate-800 flex justify-center items-center rounded-md">
              <i className="bi bi-check"></i>
            </div>
            <p className="text-[13px] md:text-[16px]">Basic community support.</p>
          </li>
          <li className="flex md:items-center gap-2 p-3 border border-slate-200 rounded-md">
            <div className="w-[20px] md:w-[30px] h-[20px] md:h-[30px] bg-amber-50 text-slate-800 flex justify-center items-center rounded-md">
              <i className="bi bi-check"></i>
            </div>
            <p className="text-[13px] md:text-[16px]">No certification upon completion.</p>
          </li>
          <li className="flex md:items-center gap-2 p-3 border border-slate-200 rounded-md">
            <div className="w-[20px] md:w-[30px] h-[20px] md:h-[30px] bg-amber-50 text-slate-800 flex justify-center items-center rounded-md">
              <i className="bi bi-check"></i>
            </div>
            <p className="text-[13px] md:text-[16px]">Ad-supported platform.</p>
          </li>
          <li className="flex md:items-center gap-2 p-3 border border-slate-200 rounded-md">
            <div className="w-[20px] md:w-[30px] h-[20px] md:h-[30px] bg-amber-50 text-slate-800 flex justify-center items-center rounded-md">
              <i className="bi bi-x"></i>
            </div>
            <p className="text-[13px] md:text-[16px]">Access to exclusive Pro Plan community forums.</p>
          </li>
          <li className="flex md:items-center gap-2 p-3 border border-slate-200 rounded-md">
            <div className="w-[20px] md:w-[30px] h-[20px] md:h-[30px] bg-amber-50 text-slate-800 flex justify-center items-center rounded-md">
              <i className="bi bi-x"></i>
            </div>
            <p className="text-[13px] md:text-[16px]">Early access to new courses and updates.</p>
          </li>
        </ul>
        <button className="py-4 mt-5 md:mt-0 w-full text-center text-white bg-amber-500 font-semi-bold">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default PricingCard;
