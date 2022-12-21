import React from "react";

const Hero = () => {
  return (
    <>
      <main className="flex justify-between pl-[91px] pr-[80px] items-center flex-row h-screen w-full bg-backgroundColor">
        <div className="w-2/4">
          <h1 className="text-white leading-3 font-[500]">John Doe</h1>
          <h3 className="w-full bg-gradient-to-r from-gradient-100 to-gradient-200 bg-clip-text mt-4 text-transparent text-[42px] leading-[63px] font-bold">Front-End Developer</h3>
          <p className="mt-4 text-[16px] leading-6 w-[447px] text-white">I design delightful product & code web. I can help everyone build their business. it such a happiness for me. so, let me to help you!</p>
          <button className="mt-[51px] py-[10px] px-[52px] bg-gradient-to-r from-gradient-300 to-gradient-400 text-white rounded-full">Contact Me</button>
        </div>
        <div className="w-2/4 flex justify-end">
          <img src="/images/HeroBg.png" alt="herobg" className="w-[541px] h-[556px]"/>
        </div>
      </main>
    </>
  );
};

export default Hero;
