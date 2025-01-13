import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
      <header className='bg-teal-500 py-2'>
          <nav className='container mx-auto flex justify-between items-center'>
              <h1>شعار</h1>
              <div className='flex items-center'>
                  <input type="text" placeholder='ابحث عن دورة' className=' border-none outline-none rounded-sm' />
                  <span>*</span>
              </div>
              <div>
                  <span>-</span>
                  <Link to='/login' className=''>دخول</Link>
              </div>
          </nav>
    </header>
  )
}

export default Header