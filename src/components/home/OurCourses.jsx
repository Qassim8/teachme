import React from 'react'
import MainTitle from '../MainTitle';
import OurCorsesCard from '../OurCorsesCard';

function OurCourses() {
    const arr = [1, 4, 7, 8, 5, 2];
  return (
    <div className="py-16">
      <MainTitle head="Our Courses" link="/courses" />
      <div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-5">
        {arr.map((e,id) => (
          <OurCorsesCard key={id} />
        ))}
      </div>
    </div>
  );
}

export default OurCourses