import React from 'react'
import StudentTesti from '../../components/auth-components/StudentTesti'
import LoginForm from '../../components/auth-components/LoginForm'

function Login() {
  return (
    <section className='py-16 flex flex-col md:flex-row justify-between items-center gap-8'>
      <div className='md:w-1/2 lg:w-[50%] order-last md:order-first flex'>
        <StudentTesti/>
      </div>
      <div className='md:w-1/2 lg:w-[40%]'>
        <LoginForm/>
      </div>
    </section>
  )
}

export default Login