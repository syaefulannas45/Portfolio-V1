import React from "react";

const Language = () => {
  return (
    <>
      <section id="language" className="w-full bg-backgroundColor pb-[113px]">
        <div className="flex justify-center space-x-[24px] pr-6 pl-6 pt-10 text-white lg:pt-[60px] lg:pl-[330px] lg:pr-[285px]">
          <h1 className="text-[32px] font-bold leading-[48px] ">Project</h1>
          <p className="w-[60%] text-[16px] font-normal leading-6">
            Practice makes it better, isn't it? <br /> I love to share anything related to techs such as programming, design, web styling, and data structure.
          </p>
        </div>
        <div className="flex w-full flex-row flex-wrap justify-evenly pt-[115px] pr-2 pl-2 lg:justify-center lg:space-x-[49px] lg:pl-0 lg:pr-0">
          <div className="relative mb-20 h-[198px] bg-card lg:mb-0">
            <div className="w-[190px] px-[15%] pt-[78px] ">
              <h1 className="bg-gradient-to-r from-gradient-300 to-gradient-400 bg-clip-text text-center text-[32px] font-semibold leading-[48px] text-transparent">10+</h1>
              <p className="text-center text-[16px] font-semibold leading-6 text-white">TypeScript</p>
            </div>
            <img src="/images/ts.svg" alt="language" className="absolute top-[-50px] left-[21%]" />
          </div>
          <div className="relative mb-20 h-[198px] bg-card lg:mb-0">
            <div className="w-[190px] px-[15%] pt-[78px]">
              <h1 className="bg-gradient-to-r from-gradient-300 to-gradient-400 bg-clip-text text-center text-[32px] font-semibold leading-[48px] text-transparent">10+</h1>
              <p className="text-[16px] font-semibold leading-6 text-white text-center">React JS</p>
            </div>
            <img src="/images/react.svg" alt="language" className="absolute top-[-50px] left-[21%]" />
          </div>
          <div className="relative mb-20 h-[198px] bg-card lg:mb-0">
            <div className="w-[190px] px-[15%] pt-[78px]">
              <h1 className="bg-gradient-to-r from-gradient-300 to-gradient-400 bg-clip-text text-center text-[32px] font-semibold leading-[48px] text-transparent">10+</h1>
              <p className="text-center text-[16px] font-semibold leading-6 text-white">HTML+CSS</p>
            </div>
            <img src="/images/htmlcss.svg" alt="language" className="absolute top-[-50px] left-[21%]" />
          </div>
          <div className="relative mb-20 h-[198px] bg-card lg:mb-0">
            <div className="w-[190px] px-[15%] pt-[78px]">
              <h1 className="bg-gradient-to-r from-gradient-300 to-gradient-400 bg-clip-text text-center text-[32px] font-semibold leading-[48px] text-transparent">10+</h1>
              <p className="text-center text-[16px] font-semibold leading-6 text-white">Data Structure & Algorithm</p>
            </div>
            <img src="/images/ds.svg" alt="language" className="absolute top-[-50px] left-[21%]" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Language;
