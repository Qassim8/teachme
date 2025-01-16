import React from 'react'
import StudentTesti from '../../components/auth-components/StudentTesti';
import RegisterForm from '../../components/auth-components/RegisterForm';

function Register() {
  return (
    <section className="py-16 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="md:w-1/2 lg:w-[50%] order-last md:order-first">
        <StudentTesti />
      </div>
      <div className="md:w-1/2 lg:w-[40%]">
        <RegisterForm />
      </div>
    </section>
  );
}

export default Register