import { useState, useEffect } from "react";
import logo from "./Assets/smart.png"
import './index.css';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const menuHandler = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`flex justify-between items-center bg-white h-10 p-6 md:p-8 w-[89%] m-auto fixed left-1/2 translate-x-[-50%]  drop-shadow-xl z-20 transition-all duration-500 ${
          scrolling ? "top-0 w-full rounded-none md:p-6" : "fixed top-5 rounded-xl"
        }`}
      >
        <div className="flex items-center">
            <img src={logo} className="logo"/>
          {/* <h1 className="text-2xl font-bold italic uppercase text-gray-700">Space Travels.</h1> */}
        </div>
        <ul
          className={`md:flex gap-12 font-medium text-gray-700 [&>li]:cursor-pointer absolute md:static top-20 bg-white max-md:p-3  text-center ${
            openMenu ? "" : "hidden"
          } ${scrolling && openMenu ? "top-12 w-full right-0 rounded-b-none" : "rounded-b-xl right-5"}`}
        >
          <a class="schedule-button" href="https://www.linkedin.com/in/nkhlrjrs/">
   Schedule a Call
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="arrow">
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
    </svg>
 
  </a>
        </ul>

        {/* MOBILE MENU ICONS */}
        <div className="md:hidden">
          <button className="text-gray-700" onClick={menuHandler} aria-label="Menu">
            {/* {openMenu ? <GrClose size={25} /> : <FiMenu size={25} />} */}
          </button>
        </div>
      </nav>
      {openMenu ? <div onClick={menuHandler} className="h-screen w-screen absolute top-0 left-0 z-10"></div> : null}
    </>
  );
};

export default Navbar;