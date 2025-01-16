import React from 'react'

function AboutSectionsTitle({title, desc}) {
  return (
    <div>
      <h2 className="text-slate-800 text-lg md:text-3xl font-semibold">
        {title}
      </h2>
      <p className="text-slate-600 text-[13px] md:text-[16px]">
        {desc}
      </p>
    </div>
  );
}

export default AboutSectionsTitle