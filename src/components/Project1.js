import React from "react";

const Project1 = () => {
  return (
    <>
      <section id="project1" className="w-full bg-backgroundColor pb-[145px]">
        <div className="pl-6 mr-6 lg:pl-0 lg:pr-0 lg:w-[100%] mx-auto lg:flex-row flex-col flex pt-10 lg:pt-[90px] lg:items-center lg:justify-center">
          <div className="font-bold text-white text-[32px] leading-[42px] mr-[24px]">Design</div>
          <div className="text-[16px] font-normal leading-6 text-white mt-2 lg:mt-0">These are my design portfolio. <br className="hidden lg:block" /> Created with love using Figma. Some of my work have been live. </div>
        </div>
        <div className="pt-[88px] lg:w-[85%] pl-4 pr-4 lg:pr-[56px] lg:pl-[56px] flex lg:flex-row flex-col lg:space-x-[16px] mx-auto items-center md:flex-row md:flex-wrap md:justify-evenly lg:justify-around">
          <div className="bg-card w-[279px] h-[320px] flex flex-col justify-end relative mb-16">
            <div className="bg-card3 w-full h-[126px] flex justify-center items-center font-semibold text-[16px] leading-6 text-white absolute">Covid-19 Tracker App</div>
            <img src="/images/hp.svg" alt="hp" className="absolute top-[-20px]" />
            <img src="/images/hp1.svg" alt="hp" className="absolute top-[-20px] left-[10%]" />
            <img src="/images/profile.svg" alt="hp" className="absolute top-[52%] left-[40%]" />
            <div className="flex justify-center">
              <button className="absolute bottom-[-20px] px-[59px] py-[10px] bg-gradient-to-r from-gradient-300 to-gradient-400 mx-auto rounded-full font-semibold text-[16px] leading-6 text-white">See Detail</button>
            </div>
          </div>
          <div className="bg-card w-[279px] h-[320px] flex flex-col justify-end relative mb-16">
            <div className="bg-card3 w-full h-[126px] flex justify-center items-center font-semibold text-[16px] leading-6 text-white absolute">3D Instagram UI</div>
            <img src="/images/hp2.svg" alt="hp" className="absolute top-[-20px]" />
            <img src="/images/hp1.svg" alt="hp" className="absolute top-[-20px] left-[10%]" />
            <img src="/images/profile.svg" alt="hp" className="absolute top-[52%] left-[40%]" />
            <div className="flex justify-center">
              <button className="absolute bottom-[-20px] px-[59px] py-[10px] bg-gradient-to-r from-gradient-300 to-gradient-400 mx-auto rounded-full font-semibold text-[16px] leading-6 text-white">See Detail</button>
            </div>
          </div>
          <div className="bg-card w-[279px] h-[320px] flex flex-col justify-end relative mb-16">
            <div className="bg-card3 w-full h-[126px] flex justify-center items-center font-semibold text-[16px] leading-6 text-white absolute">Helta - Health App</div>
            <img src="/images/hp.svg" alt="hp" className="absolute top-[-20px]" />
            <img src="/images/hp1.svg" alt="hp" className="absolute top-[-20px] left-[10%]" />
            <img src="/images/profile.svg" alt="hp" className="absolute top-[52%] left-[40%]" />
            <div className="flex justify-center">
              <button className="absolute bottom-[-20px] px-[59px] py-[10px] bg-gradient-to-r from-gradient-300 to-gradient-400 mx-auto rounded-full font-semibold text-[16px] leading-6 text-white">See Detail</button>
            </div>
          </div>
          <div className="bg-card w-[279px] h-[320px] flex flex-col justify-end relative mb-16">
            <div className="bg-card3 w-full h-[126px] flex justify-center items-center font-semibold text-[16px] leading-6 text-white absolute">Relax App</div>
            <img src="/images/hp.svg" alt="hp" className="absolute top-[-20px]" />
            <img src="/images/hp1.svg" alt="hp" className="absolute top-[-20px] left-[10%]" />
            <img src="/images/profile.svg" alt="hp" className="absolute top-[52%] left-[40%]" />
            <div className="flex justify-center">
              <button className="absolute bottom-[-20px] px-[59px] py-[10px] bg-gradient-to-r from-gradient-300 to-gradient-400 mx-auto rounded-full font-semibold text-[16px] leading-6 text-white">See Detail</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project1;
