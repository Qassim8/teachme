import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [showNav, setShowNav] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    
  }, []);
  return (
    <header
      className={`sticky top-0 border-b py-5 z-10 ${
        scroll ? "bg-white" : "bg-transparent"
      } duration-300`}
    >
      <nav className="container mx-auto px-1 md:px-0 flex justify-between items-center">
        <div className="flex gap-10">
          <Link
            to="/"
            className="w-[45px] h-[45px] flex justify-center items-center bg-amber-500 rounded-md"
          >
            <i className="bi bi-book-half text-white text-[25px]"></i>
          </Link>
          <ul
            className={`flex flex-col md:flex-row items-center justify-center gap-10 md:gap-1
          fixed md:relative top-0 ${
            showNav ? "left-0" : "-left-[200%]"
          } md:left-0 bg-amber-500/90 md:bg-transparent w-full h-[100vh] md:h-auto duration-300`}
          >
            <i
              className="bi bi-x md:hidden text-4xl font-bold text-white cursor-pointer absolute top-2 right-2"
              onClick={() => setShowNav(false)}
            ></i>
            <li>
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/courses" className="nav-link">
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-link">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/pricing" className="nav-link">
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-1">
          <Link
            to="/register"
            className="nav-link hover:text-white hover:bg-amber-500 py-1.5 px-2 md:px-5 md:py-3"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="nav-link text-white bg-amber-500 hover:bg-amber-400 py-1.5 px-2 md:px-5 md:py-3"
          >
            Login
          </Link>
          <i
            className="bi bi-list text-2xl text-slate-800 cursor-pointer md:hidden"
            onClick={() => setShowNav(!showNav)}
          ></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
