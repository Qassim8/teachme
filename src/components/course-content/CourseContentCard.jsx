import React from "react";

function CourseContentCard() {
  return (
    <div className=" bg-white rounded-md flex flex-col gap-5 md:gap-10 p-3 md:p-8">
      <h2 className="text-slate-800 font-bold text-5xl text-end">01</h2>
      <h3 className="font-semibold text-lg md:text-xl">
        Introduction to UI/UX Design
      </h3>
      <ul className="flex flex-col gap-3">
        <li className="flex flex-col md:flex-row justify-between md:items-center gap-3 md:gap-5 p-2 md:p-5 border border-slate-100 rounded-md">
          <div>
            <h3 className="font-semibold text-md text-slate-800">
              Understanding UI/UX Design Principles
            </h3>
            <p className="text-slate-500 text-[14px]">Lesson 01</p>
          </div>
          <div>
            <div className="p-2 bg-slate-100 rounded-md flex items-center justify-center gap-2 w-[110px]">
              <i className="bi bi-clock text-slate-500"></i>
              <span className="text-slate-500 text-[14px]">45 Minutes</span>
            </div>
          </div>
        </li>
        <li className="flex flex-col md:flex-row justify-between md:items-center gap-3 md:gap-5 p-2 md:p-5 border border-slate-100 rounded-md">
          <div>
            <h3 className="font-semibold text-md text-slate-800">
              Importace Of User-Centered Design
            </h3>
            <p className="text-slate-500 text-[14px]">Lesson 02</p>
          </div>
          <div>
            <div className="p-2 bg-slate-100 rounded-md flex items-center justify-center gap-2 w-[110px]">
              <i className="bi bi-clock text-slate-500"></i>
              <p className="text-gray-600 text-[14px]">1 Hour</p>
            </div>
          </div>
        </li>
        <li className="flex flex-col md:flex-row justify-between md:items-center gap-3 md:gap-5 p-2 md:p-5 border border-slate-100 rounded-md">
          <div>
            <h3 className="font-semibold text-md text-slate-800">
              The Rule Of UI/UX Design in Product Development
            </h3>
            <p className="text-slate-500 text-[14px]">Lesson 03</p>
          </div>
          <div>
            <div className="p-2 bg-slate-100 rounded-md flex items-center justify-center gap-2 w-[110px]">
              <i className="bi bi-clock text-slate-500"></i>
              <span className="text-slate-500 text-[14px]">45 Minutes</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default CourseContentCard;
