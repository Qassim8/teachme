import React from "react";
import AboutSectionsTitle from "../about/AboutSectionsTitle";
import TestimonialsCard from "../TestimonialsCard";

function StudentTesti() {
  return (
    <div>
      <AboutSectionsTitle
        title="Students Testimonials"
        desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus et
      corrupti ipsa dignissimos odit blanditiis nihil quia fuga totam, dolore
      perspiciatis laboriosam tempora officia obcaecati quos hic? Dolor, ullam
      voluptas!"
      />
      <div className="py-5 px-0 mx-0">
        <TestimonialsCard />
      </div>
    </div>
  );
}

export default StudentTesti;
