import React from 'react'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Footer() {
  return (
    <footer className="bg-white">
      <div className="container px-2 md:mx-auto flex flex-col md:flex-row gap-5 justify-between flex-wrap py-16 border-b">
        <div className="flex flex-col gap-7">
          <Link
            to="/"
            className="w-[45px] h-[45px] flex justify-center items-center bg-amber-500 rounded-md"
          >
            <i className="bi bi-book-half text-white text-[25px]"></i>
          </Link>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-1 text-slate-800">
              <i className="bi bi-envelope-fill text-xl"></i>
              <span>hello@academy.com</span>
            </li>
            <li className="flex items-center gap-1 text-slate-800">
              <i className="bi bi-telephone-fill text-xl"></i>
              <span>+20 91813 23 2309</span>
            </li>
            <li className="flex items-center gap-1 text-slate-800">
              <i className="bi bi-geo-alt-fill text-xl"></i>
              <span>Anywhere in the world</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="font-bold text-lg">Home</h2>
          <ul className="flex flex-col gap-2">
            <li className='text-slate-700'>
              <HashLink>Benefits</HashLink>
            </li>
            <li className='text-slate-700'>
              <HashLink>Our Courses</HashLink>
            </li>
            <li className='text-slate-700'>
              <HashLink>Our Testimonials</HashLink>
            </li>
            <li className='text-slate-700'>
              <HashLink>Our FAQ</HashLink>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="font-bold text-lg">About Us</h2>
          <ul className="flex flex-col gap-2">
            <li className='text-slate-700'>
              <HashLink>Company</HashLink>
            </li>
            <li className='text-slate-700'>
              <HashLink>Achievements</HashLink>
            </li>
            <li className='text-slate-700'>
              <HashLink>Our Goals</HashLink>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="font-bold text-lg">Social Profiles</h2>
          <ul className="flex items-center gap-2">
            <li className="w-[40px] h-[40px] text-slate-700 bg-slate-100 flex justify-center items-center border rounded-md cursor-pointer">
              <i className="bi bi-facebook"></i>
            </li>
            <li className="w-[40px] h-[40px] text-slate-700 bg-slate-100 flex justify-center items-center border rounded-md cursor-pointer">
              <i className="bi bi-twitter-x"></i>
            </li>
            <li className="w-[40px] h-[40px] text-slate-700 bg-slate-100 flex justify-center items-center border rounded-md cursor-pointer">
              <i className="bi bi-linkedin"></i>
            </li>
          </ul>
        </div>
      </div>
      <p className="py-3 text-center text-slate-600">
        &copy; 2023 Academy. All rights reserved
      </p>
    </footer>
  );
}

export default Footer