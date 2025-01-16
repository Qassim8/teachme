import React from "react";
import { Link } from "react-router-dom";

function CourseCard() {
  return (
    <div className="p-5 md:p-10 bg-white border border-slate-100 rounded-md flex flex-col gap-8">
      {/* Course Title and Descritpion */}
      <div>
        <h2 className="text-slate-800 text-lg md:text-xl font-bold">
          Web Design Fundametals
        </h2>
        <div className="flex flex-col md:flex-row justify-between md:items-center md:gap-10">
          <p className="text-slate-600 text-[13px] md:text-[16px]">
            Learn the fundamentals of Web design, including HTML, CSS, and
            responsive design principles. Develop the skill to create visually
            appealing and user-friendly websites.
          </p>
          <Link
            to="/courses/1"
            className="w-[100px] md:w-[150px] py-1.5 md:py-3 mt-5 md:mt-0 text-center text-slate-800 bg-white font-semibold border rounded-md"
          >
            View Course
          </Link>
        </div>
      </div>
      {/* Course Title and Description */}
      {/* Course Images */}
      <div className="flex flex-col md:flex-row justify-between gap-3">
        <div className="h-[200px] md:h-[300px] rounded-md overflow-hidden">
          <img
            src="https://pinnacleeducation.ae/wp-content/uploads/2021/03/Web-Design-Course-for-Kids.jpg"
            alt="course"
            className="w-full h-full"
            loading="lazy"
          />
        </div>
        <div className="h-[200px] md:h-[300px] rounded-md overflow-hidden">
          <img
            src="https://pinnacleeducation.ae/wp-content/uploads/2021/03/Web-Design-Course-for-Kids.jpg"
            alt="course"
            className="w-full h-full"
            loading="lazy"
          />
        </div>
        <div className="h-[200px] md:h-[300px] rounded-md overflow-hidden">
          <img
            src="https://pinnacleeducation.ae/wp-content/uploads/2021/03/Web-Design-Course-for-Kids.jpg"
            alt="course"
            className="w-full h-full"
            loading="lazy"
          />
        </div>
      </div>
      {/* Course Images */}
      {/* Course Limitation and Instractor */}
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
      {/* Course Limitation and Instractor */}
      {/* Course Curriculum */}
      <div className="border border-slate-200 rounded-md">
        <h2 className="text-lg font-bold p-5 md:px-10 py-5 border-b border-b-slate-200">
          Curriculum
        </h2>
        <div className="flex gap-5 md:gap-10 flex-col md:flex-row justify-between p-5 md:p-10">
          <div className="flex-1 pb-2 border-b md:border-b-0 md:border-r">
            <h3 className="text-lg md:text-4xl font-bold md:pb-2">01</h3>
            <p>Introduction to HTML</p>
          </div>
          <div className="flex-1 pb-2 border-b md:border-b-0 md:border-r">
            <h3 className="text-lg md:text-4xl font-bold md:pb-2">02</h3>
            <p>Styling with CSS</p>
          </div>
          <div className="flex-1 pb-2 border-b md:border-b-0 md:border-r">
            <h3 className="text-lg md:text-4xl font-bold md:pb-2">03</h3>
            <p>Introduction to Responsive Design</p>
          </div>
          <div className="flex-1 pb-2 border-b md:border-b-0 md:border-r">
            <h3 className="text-lg md:text-4xl font-bold md:pb-2">04</h3>
            <p>Design Principles for Web</p>
          </div>
          <div className="flex-1 pb-2">
            <h3 className="text-lg md:text-4xl font-bold md:pb-2">05</h3>
            <p>Building a Basic Website</p>
          </div>
        </div>
      </div>
      {/* Course Curriculum */}
    </div>
  );
}

export default CourseCard;
