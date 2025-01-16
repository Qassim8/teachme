import React from "react";

function FAQCard() {
  return (
      <div className="p-5 border border-slate-200 rounded-md">
        <div className="flex justify-between items-center gap-10">
          <h2 className="font-semibold text-[15px] md:text-xl">
            Can I enroll in multiple courses at once?
          </h2>
          <div
            id="close"
            className="w-[20px] md:w-[40px] h-[20px] md:h-[40px] bg-amber-50 rounded-md flex justify-center items-center cursor-pointer closer"
            onClick={(e) => {
              if (e.target.classList.contains("bi-plus")) {
                e.target.classList.remove("bi-plus");
                e.target.classList.add("bi-x");
              } else {
                e.target.classList.add("bi-plus");
                e.target.classList.remove("bi-x");
              }
              const parent = e.target.parentElement;
              const parentOfparent = parent.parentElement;
              if (
                parentOfparent.nextElementSibling.classList.contains("hide")
              ) {
                parentOfparent.nextElementSibling.classList.remove("hide");
                parentOfparent.nextElementSibling.classList.add("show");
              } else {
                parentOfparent.nextElementSibling.classList.add("hide");
                parentOfparent.nextElementSibling.classList.remove("show");
              }
            }}
          >
            <i className="bi bi-plus text-xl md:text-3xl"></i>
          </div>
        </div>
        <p className="text-slate-700 pt-5 mt-3 border-t border-t-slate-200 hide answer duration-300">
          Absolutely! You Can I enroll in multiple courses simultaneously and
          access them at your convenience
        </p>
      </div>
  );
}

export default FAQCard;
