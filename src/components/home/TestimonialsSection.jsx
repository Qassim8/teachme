import React from "react";
import MainTitle from "../MainTitle";
import TestimonialsCard from "../TestimonialsCard";

function TestimonialsSection() {
  return (
    <div className="py-16">
      <MainTitle head="Our Testimonials" link="/about" />
      <div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-5">
        <TestimonialsCard />
      </div>
    </div>
  );
}

export default TestimonialsSection;
