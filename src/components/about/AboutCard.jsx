import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function AboutCard({icon, head, text}) {
  return (
    <div className="p-5 md:p-10 bg-white rounded-md flex flex-col gap-5">
      <div className="w-[50px] h-[50px] bg-amber-50 border border-amber-100 rounded-md flex justify-center items-center">
        <FontAwesomeIcon icon={icon} className="text-amber-500 text-[22px] " />
      </div>
      <h2 className="font-semibold md:text-xl">{head}</h2>
      <p className="text-slate-600 text-[12px] md:text-[16px]">
        {text}
      </p>
    </div>
  );
}

export default AboutCard;
