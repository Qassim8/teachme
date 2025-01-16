import React, { useState } from "react";
import { Link } from "react-router-dom";

function RegisterForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSignup = (event) => {
        event.preventDefault();
        let newErrors = {};
        if (!name) newErrors.name = "name is required!";
        if (!email) newErrors.email = "email is required!";
        if (!password) newErrors.password = "password is required!";
        if (name.length < 8) newErrors.nameLength = " name should be 8 char at least!";
        if (password.length < 8) newErrors.passwordLength = " password should be 8 char at least!";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
        }
    }

  return (
    <section className="p-5 md:p-10 rounded-md bg-white">
      <div className="py-5 text-center">
        <h2 className="font-bold text-lg md:text-4xl text-slate-800">
          Sign Up
        </h2>
        <p className="text-slate-600">
          Create an Account to unlock exclusive features
        </p>
      </div>
      <form className="flex flex-col gap-5 py-8" onSubmit={handleSignup}>
        <div className="flex-1">
          <label htmlFor="lastname" className="font-semibold pb-2 block">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter Your Name"
            className="p-3 bg-slate-50 border border-slate-200 outline-none rounded-md w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span className="text-red-500">{errors.name}</span>}
          {errors.nameLength && <span className="text-red-500">{errors.nameLength}</span>}
        </div>
        <div className="flex-1">
          <label htmlFor="lastname" className="font-semibold pb-2 block">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="p-3 bg-slate-50 border border-slate-200 outline-none rounded-md w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="text-red-500">{errors.email}</span>}
        </div>
        <div className="flex-1">
          <label htmlFor="lastname" className="font-semibold pb-2 block">
            Password
          </label>
          <input
            type="text"
            placeholder="Enter Your Password"
            className="p-3 bg-slate-50 border border-slate-200 outline-none rounded-md w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <span className="text-red-500">{errors.password}</span>
          )}
          {errors.passwordLength && (
            <span className="text-red-500">{errors.passwordLength}</span>
          )}
        </div>
        <button className="mt-5 py-3 text-white bg-amber-500 rounded-md cursor-pointer outline-none">
          Sign Up
        </button>
      </form>
      <p
        className="text-center text-slate-400 relative before:absolute before:top-1/2 before:left-0 before:w-[45%] before:h-[1px] before:bg-slate-200 
          after:absolute after:top-1/2 after:right-0 after:w-[45%] after:h-[1px] after:bg-slate-200"
      >
        OR
      </p>
      <button className="w-full flex justify-center items-center my-5 py-3 text-slate-700 bg-slate-100 border border-slate-200 rounded-md cursor-pointer outline-none">
        <i className="bi bi-google text-amber-300 text-[18px] md:text-[22px] mr-2"></i>{" "}
        <span>Sign Up with Google</span>
      </button>
      <div className="flex justify-center items-center text-[13px] md:text-[16px] text-slate-700">
        <span>Already have an account? </span>
        <Link to="/login" className="font-semibold underline px-2">
          Login
        </Link>
        <i className="bi bi-arrow-up-right font-extrabold"></i>
      </div>
    </section>
  );
}

export default RegisterForm;
