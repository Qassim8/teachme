import React from 'react'

function AltTitle({title, desc}) {
  return (
      <div className='my-16 pb-8 border-b border-b-slate-200 flex flex-col md:flex-row gap-3 md:gap-16 justify-between md:items-center'>
          <h2 className='flex-1 text-xl md:text-4xl font-bold'>{title}</h2>
          <p className='flex-1 text-slate-600 text-[14px] md:text-[17px]'>{ desc}</p>
    </div>
  )
}

export default AltTitle