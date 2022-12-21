import React from "react";

const Project1 = () => {
  return (
    <>
      <section id="project1" className="w-full bg-backgroundColor">
        <div className="w-[45%] mx-auto flex  pt-[90px]">
          <div className="font-bold text-white text-[32px] leading-[42px] mr-[24px]">Design</div>
          <div className="text-[16px] font-normal leading-6 text-white">These are my design portfolio. Created with love using Figma. Some of my work have been live. </div>
        </div>
        <div className="pt-[88px] w-[85%] pl-[56px] h-screen flex space-x-[16px] mx-auto">
          <div className="bg-card w-[279px] h-[320px] flex flex-col justify-end relative">
            <div className="bg-card3 w-full h-[126px] flex justify-center items-center font-semibold text-[16px] leading-6 text-white absolute">Covid-19 Tracker App</div>
            <img src="/images/hp.svg" alt="hp" className="absolute top-[-20px]" />
            <img src="/images/hp1.svg" alt="hp" className="absolute top-[-20px] left-[10%]" />
            <img src="/images/profile.svg" alt="hp" className="absolute top-[52%] left-[40%]" />
            <div className="flex justify-center">
              <button className="absolute bottom-[-20px] px-[59px] py-[10px] bg-gradient-to-r from-gradient-300 to-gradient-400 mx-auto rounded-full font-semibold text-[16px] leading-6 text-white">See Detail</button>
            </div>
          </div>
          <div className="bg-card w-[279px] h-[320px] flex flex-col justify-end relative">
            <div className="bg-card3 w-full h-[126px] flex justify-center items-center font-semibold text-[16px] leading-6 text-white absolute">3D Instagram UI</div>
            <img src="/images/hp2.svg" alt="hp" className="absolute top-[-20px]" />
            <img src="/images/hp1.svg" alt="hp" className="absolute top-[-20px] left-[10%]" />
            <img src="/images/profile.svg" alt="hp" className="absolute top-[52%] left-[40%]" />
            <div className="flex justify-center">
              <button className="absolute bottom-[-20px] px-[59px] py-[10px] bg-gradient-to-r from-gradient-300 to-gradient-400 mx-auto rounded-full font-semibold text-[16px] leading-6 text-white">See Detail</button>
            </div>
          </div>
          <div className="bg-card w-[279px] h-[320px] flex flex-col justify-end relative">
            <div className="bg-card3 w-full h-[126px] flex justify-center items-center font-semibold text-[16px] leading-6 text-white absolute">Helta - Health App</div>
            <img src="/images/hp.svg" alt="hp" className="absolute top-[-20px]" />
            <img src="/images/hp1.svg" alt="hp" className="absolute top-[-20px] left-[10%]" />
            <img src="/images/profile.svg" alt="hp" className="absolute top-[52%] left-[40%]" />
            <div className="flex justify-center">
              <button className="absolute bottom-[-20px] px-[59px] py-[10px] bg-gradient-to-r from-gradient-300 to-gradient-400 mx-auto rounded-full font-semibold text-[16px] leading-6 text-white">See Detail</button>
            </div>
          </div>
          <div className="bg-card w-[279px] h-[320px] flex flex-col justify-end relative">
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
