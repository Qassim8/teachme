import React from 'react'
import { HashLink } from 'react-router-hash-link';
import FAQCard from '../FAQCard';

function FAQ() {
  const arr = [1,1,1,1]
  return (
    <div className="my-20 p-8 md:p-16 bg-white rounded-md flex flex-col md:flex-row gap-8 md:gap-0 justify-between">
      <div className="flex flex-col gap-5">
        <h2 className="text-slate-800 text-xl md:text-3xl font-bold">
          Frequently Asked Questions
        </h2>
        <p className="text-slate-600 text-[13px] md:text-[16px]">
          Still you have any questions?Contact our team via support@academy.com
        </p>
        <HashLink
          to="/about/#faq"
          className="w-[150px] py-2 md:py-3 mt-5 md:mt-0 text-center text-slate-800 font-semibold border rounded-md"
        >
          See All FAQ's
        </HashLink>
      </div>
      <div className="flex flex-col gap-5">
        {arr.map((e, id) => (
          <FAQCard key={id} />
        ))}
      </div>
    </div>
  );
}

export default FAQ