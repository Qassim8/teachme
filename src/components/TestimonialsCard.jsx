import React from 'react'
import { Link } from 'react-router-dom';

function TestimonialsCard() {
  const testimonials = [
    { comment: "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging.I highly recommend it!", 
          img: "https://cdn0.iconfinder.com/data/icons/female-avatars/512/Female_avatar-07-128.png", 
          name: "Sarah L" },
    {
      comment: "The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!",
      img: "https://miro.medium.com/v2/resize:fit:2400/1*8pwLgdOCMKoluqGeqp3ieg.png",
      name: "Jason M"
    },
    {
      comment: "The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!",
      img: "https://freesvg.org/storage/img/thumb/1375025979.png",
      name: "Emily R"
    },
    {
      comment: "I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!",
      img: "https://freesvg.org/storage/img/thumb/1547510251.png",
      name: "Michael K"
    },
  ];

  return (
    testimonials.map(({comment, img, name},id) =><div className="rounded-md overflow-hidden border border-slate-100" key={id}>
      <div className="bg-white p-5 md:p-10 ">
        <p className="text-slate-600 text-[12px] md:text-[16px]">
          {comment}
        </p>
      </div>
      <div className="flex justify-between items-center bg-slate-50 px-5 md:px-10 py-3 border-t">
        <div className="flex items-center gap-2">
          <div className="w-[35px] md:w-[50px] h-[35px] md:h-[50px] rounded-sm overflow-hidden">
            <img
              src={img}
              alt="avatar"
                          className="h-full w-full"
                          loading='lazy'
            />
          </div>
          <p className='font-semibold text-[10px] md:text-[16px]'>{name }</p>
        </div>
        <Link className="py-2 md:py-3 px-4 md:px-6 text-[12px] md:text-[16px] text-center bg-slate-100 text-slate-600 rounded-md font-semibold">
          Read Full Story
        </Link>
      </div>
    </div>)
  );
}

export default TestimonialsCard