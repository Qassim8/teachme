import React from "react";
import { Link } from "react-router-dom";

function OurCorsesCard() {
  return (
    <div className="p-5 md:p-10 bg-white border border-slate-100 rounded-md flex flex-col gap-8">
      <div className="h-[200px] md:h-[300px] rounded-md overflow-hidden">
        <img
          src="https://pinnacleeducation.ae/wp-content/uploads/2021/03/Web-Design-Course-for-Kids.jpg"
          alt="course"
          className="w-full h-full"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col md:flex-row justify-between md:items-center">
        <div className="flex items-center gap-2">
          <span className="text-[12px] md:text-[16px] py-2 px-4 border rounded-md text-slate-600">
            4 Weeks
          </span>
          <span className="text-[12px] md:text-[16px]  py-2 px-4 border rounded-md text-slate-600">
            Beginner
          </span>
        </div>
        <p className="text-slate-800 font-semibold md:text-lg mt-5 md:mt-0">
          By John Smith
        </p>
      </div>
      <div>
        <h3 className="font-semibold text-slate-800 md:text-xl">
          Web Design Fundamentals
        </h3>
        <p className="text-slate-600 text-[12px] md:text-[16px]">
          Learn the fundamentals of Web design, including HTML, CSS, and
          responsive design principles. Develop the skill to create visually
          appealing and user-friendly websites.
        </p>
      </div>
      <Link className="py-2 md:py-3 text-slate-700 bg-slate-100 font-semibold text-[12px] md:text-[16px] text-center rounded-md">
        Get it Now
      </Link>
    </div>
  );
}

export default OurCorsesCard;
