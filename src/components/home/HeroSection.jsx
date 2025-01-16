import React from 'react'
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className="flex flex-col justify-center items-center gap-5 text-center h-[80vh]">
      <div className="p-3 font-bold text-[12px] md:text-4xl text-slate-800 bg-white flex items-center gap-2 rounded-md border">
        <div className="w-[25px] md:w-[50px] h-[25px] md:h-[50px] flex justify-center items-center bg-amber-100/50 rounded-md">
          <i className="bi bi-lightning-charge-fill md:text-2xl"></i>
        </div>
        <span className="text-amber-500">Unlock</span>
        Your Creative Potentail
      </div>
      <div>
        <h2 className="font-semibold text-[10px] md:text-2xl text-slate-800">
          With Online Design and Development Courses.
        </h2>
        <p className="text-slate-700 text-[10px] md:text-lg mt-2">
          Learn From Industry Experts and Enhance Your Skills
        </p>
      </div>
      <div className="flex justify-center items-center gap-3 mt-3">
        <Link
          to="/courses"
          className="px-3 py-1 text-[10px] md:text-[16px] md:px-5 md:py-3 font-semibold text-white bg-amber-500 rounded-md"
        >
          Explore Courses
        </Link>
        <Link
          to="/courses"
          className="px-3 py-1 text-[10px] md:text-[16px] md:px-5 md:py-3 font-semibold text-slate-800 bg-white border rounded-md"
        >
          View Pricig
        </Link>
      </div>
    </div>
  );
}

export default HeroSection