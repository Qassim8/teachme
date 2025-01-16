import React from "react";

function FAQCard() {
  const questions = [
    "Can I enroll in multiple courses at once?",
    "What kind of support can I expect from instructors?",
    "Are the courses self-paced or do they have specific start and end dates?",
    "Are there any prerequisites for the courses?",
    "Can I download the course materials for offline access?",
  ];
  return questions.map((question, id) => (
    <div className="p-5 border border-slate-200 rounded-md" key={id}>
      <div className="flex justify-between items-center gap-10">
        <h2 className="font-semibold text-[15px] md:text-xl">{question}</h2>
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
            if (parentOfparent.nextElementSibling.classList.contains("hide")) {
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
        voluptas. Ex dolor molestiae dolore dolores autem voluptatum placeat
        debitis eos hic quis quibusdam, sunt veniam maiores. Ea hic debitis
        deserunt!
      </p>
    </div>
  ));
}

export default FAQCard;
