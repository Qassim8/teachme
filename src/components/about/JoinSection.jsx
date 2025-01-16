import React from 'react'

function JoinSection() {
  return (
    <sectio className="my-16 p-5 md:p-10 bg-white rounded-md flex justify-between md:items-center gap-5 md:gap-20">
      <div>
        <h2 className="flex-1 text-slate-900 text-xl md:text-5xl font-bold mb-2"><span className='text-amber-500'>Together</span>, let's shape the future of digital innovation</h2>
        <p className="text-slate-700 text-[14px] md:text-[17px]">
          Join us on this exciting learning journey and unlock your potintial in design and development
        </p>
          </div>
          <button
                    className="w-[120px] py-2 md:py-3 mt-5 md:mt-0 text-center text-white bg-amber-500 rounded-md"
                  >
                    Join Now
                  </button>
    </sectio>
  );
}

export default JoinSection