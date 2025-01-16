import React, { Fragment } from "react";
import AltTitle from "../components/AltTitle";
import CourseCard from "../components/CourseCard";

function Courses() {
  const arr = [1,1,1,1,1]
  return (
    <Fragment>
      <AltTitle
        title="Online Courses on Design and Development"
        desc="Welcome to our online course page, where you can enhance your skills in design and development.
        Choose from our carefully curated selection of 10 courses designed to provide you with comprehensive
        knowledge and practical experience. Explore the courses below and find the perfect fit for your learning journey."
      />
      <div className="flex flex-col gap-5 pb-20">
        {arr.map((el, id) => (
          <CourseCard key={id} />
        ))}
      </div>
    </Fragment>
  );
}

export default Courses;
