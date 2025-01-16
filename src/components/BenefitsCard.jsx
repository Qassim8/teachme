
function BenefitsCard() {
  const benefits = [
    {
      id: 1,
      title: "Flexible Learning Schedule",
      text: "Fit your coursework around your existing commitments and obligations.",
    },
    {
      id: 2,
      title: "Expert Instruction",
      text: "Learn from industry experts who have hands-on experience in design and development.",
    },
    {
      id: 3,
      title: "Diverse Course Offerings",
      text: "Explore a wide range of design and development courses covering various topics.",
    },
    {
      id: 4,
      title: "Updated Curriculum",
      text: "Access courses with up-to-date content reflecting the latest trends and industry practices.",
    },
    {
      id: 5,
      title: "Practical Projects and Assignments",
      text: "Develop a portfolio showcasing your skills and abilities to potential employers.",
    },
    {
      id: 6,
      title: "Interactive Learning Environment",
      text: "Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.",
    },
  ];
  return (
    benefits.map(({ id, title, text }) => (
        <div className=" bg-white rounded-md flex flex-col gap-5 md:gap-10 p-3 md:p-8" key={id}>
          <h2 className="text-slate-800 font-bold text-2xl md:text-5xl text-end">0{id}</h2>
          <div>
            <h3 className="font-semibold text-lg md:text-xl">{title}</h3>
            <p className="text-slate-600">{text}</p>
          </div>
          <div className="w-[40px] md:w-[50px] h-[40px] md:h-[50px] flex justify-center items-center bg-slate-50 border rounded-md">
            <i className="bi bi-arrow-up-right text-amber-500"></i>
          </div>
        </div>
      ))
  );
}

export default BenefitsCard