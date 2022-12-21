import React from "react";

const Hero = () => {
  return (
    <>
      <main className="flex w-full flex-col justify-between bg-backgroundColor py-32 pr-6 pl-6 lg:h-screen lg:flex-row lg:items-center lg:py-0 lg:pl-[91px] lg:pr-[80px]">
        <div className="lg:w-2/4">
          <h1 className="font-[500] leading-3 text-white">Syaeful Annas</h1>
          <h3 className="mt-4 w-full bg-gradient-to-t from-gradient-200 to-gradient-100 bg-clip-text text-[42px] font-bold leading-[63px] text-transparent">Front-End Developer</h3>
          <p className="mt-4 text-[16px] leading-6 text-white lg:w-[447px]">I design delightful product & code web. I can help everyone build their business. it such a happiness for me. so, let me to help you!</p>
          <button className="mt-[51px] rounded-full bg-gradient-to-r from-gradient-300 to-gradient-400 py-[10px] px-[52px] text-white">Contact Me</button>
        </div>
        <div
          className="mt-4 flex w-full justify-center lg:mt-0
         lg:w-2/4"
        >
          <img src="/images/HeroBg.png" alt="herobg" className="flex justify-center rounded-full lg:h-[556px] lg:w-[541px]" />
        </div>
      </main>
    </>
  );
};

export default Hero;
