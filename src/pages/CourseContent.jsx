import React from "react";
import AltTitle from "../components/AltTitle";
import CourseVideo from "../components/course-content/CourseVideo";
import CourseContentCard from "../components/course-content/CourseContentCard";

function CourseContent() {
  const arr = [1, 1, 1, 1, 1];

  return (
    <div>
      <AltTitle
        title="UI/UX Design Course"
        desc="Welcome to our UI/UX Design course! This comprehensive program will equip you with
         the knowledge and skills to create exceptional user interfaces (UI) and enhance user experiences (UX).
          Dive into the world of design thinking, wireframing, prototyping, and usability testing. Below is an overview of the curriculum"
      />
      <section className="my-16 w-full h-[30vh] md:h-[80vh] bg-slate-600">
        <CourseVideo videoId="IxDGEXJFVNY" />
      </section>
      <section className="pb-20 grid md:grid-cols-2 gap-5">
        {arr.map((el, id) => <CourseContentCard key={id}/>)}
      </section>
    </div>
  );
}

export default CourseContent;
