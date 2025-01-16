import React from "react";
import { Link } from "react-router-dom";

function MainTitle({ head, link }) {
  return (
    <div>
      <h2 className="text-slate-800 text-xl md:text-3xl font-bold">{head}</h2>
      <div className="flex flex-col md:flex-row justify-between md:items-center">
        <p className="text-slate-600 text-[13px] md:text-[16px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum,
          numquam cumque. Impedit deleniti dolores magnam. Iure quisquam minima,
          laboriosam nesciunt magnam ex exercitationem eos
        </p>
        <Link
          to={`${link}`}
          className="w-[100px] md:w-[150px] py-1.5 md:py-3 mt-5 md:mt-0 text-center text-slate-800 bg-white font-semibold border rounded-md"
        >
          View All
        </Link>
      </div>
    </div>
  );
}

export default MainTitle;
