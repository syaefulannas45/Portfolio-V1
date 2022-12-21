import React from "react";

const Navbar = () => {
  return (
    <>
    {/* eslint-disable */}
      <header className="fixed pl-[90px] pt-[50px] pr-[50px] flex justify-between w-full items-center">
        <div>
          <a href="#">
            <img src="/images/logo.svg" alt="logo" />
          </a>
        </div>
        <nav>
          <ul className="text-white flex space-x-[49px] leading-8">
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
