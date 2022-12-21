import React, { useState } from "react";

const Navbar = () => {
  window.onscroll = function () {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;
    if (window.pageYOffset > fixedNav) {
      header.classList.add("navbar-fixed");
    } else {
      header.classList.remove("navbar-fixed");
    }
  };
  const [toggle, setToggle] = useState(false);

  return (
    <>
      {/* eslint-disable */}
      <header className="fixed flex w-full flex-col justify-between pl-4 pt-[20px] pr-4 pb-4 lg:flex-row lg:items-center lg:pl-[90px] lg:pr-[50px]">
        <div className="flex w-full items-center justify-between">
          <a href="#">
            <img src="/images/logo.svg" alt="logo" />
          </a>
          <div onClick={() => setToggle(!toggle)} className="cursor-pointer">
            <i class={`fa-solid fa-bars text-4xl text-white lg:hidden ${toggle ? "block" : "hidden"} `}></i>
            <i class={`fa-solid fa-xmark text-4xl text-white lg:hidden ${!toggle ? "block" : "hidden"}`}></i>
          </div>
        </div>

        <nav>
          <ul
            className={`flex flex-col pt-8 leading-8 text-white lg:flex-row lg:space-x-[49px] lg:pt-0 ${
              !toggle ? "block" : "hidden"
            } mt-4 animate-left bg-card bg-opacity-80 pl-4 pb-4 backdrop-blur-sm lg:bg-transparent lg:bg-opacity-0 lg:backdrop-blur-none`}
          >
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Experience</a>
            </li>
            <li>
              <a href="#">Project</a>
            </li>
            <li>
              <a href="#">Connect</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
