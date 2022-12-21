import React from "react";

const Language = () => {
  return (
    <>
      <section id="language" className="w-full bg-backgroundColor pb-[113px]">
        <div className="text-white pt-[60px] flex justify-center space-x-[24px] pl-[330px] pr-[285px]">
          <h1 className="font-bold text-[32px] leading-[48px] ">Project</h1>
          <p className="font-normal text-[16px] leading-6 w-[60%]">
            Practice makes it better, isn't it? <br /> I love to share anything related to techs such as programming, design, web styling, and data structure.
          </p>
        </div>
        <div className="pt-[115px] flex justify-center space-x-[49px] w-full">
          <div className="bg-card relative h-[198px]">
            <div className="w-[190px] pt-[78px] px-[15%] ">
              <h1 className="bg-gradient-to-r from-gradient-300 to-gradient-400 text-center bg-clip-text text-transparent font-semibold text-[32px] leading-[48px]">10+</h1>
              <p className="font-semibold text-[16px] leading-6 text-white">TypeScript</p>
            </div>
            <img src="/images/ts.svg" alt="language" className="absolute top-[-50px] left-[21%]" />
          </div>
          <div className="bg-card relative h-[198px]">
            <div className="w-[190px] pt-[78px] px-[15%]">
              <h1 className="bg-gradient-to-r from-gradient-300 to-gradient-400 text-center bg-clip-text text-transparent font-semibold text-[32px] leading-[48px]">10+</h1>
              <p className="font-semibold text-[16px] leading-6 text-white">React JS</p>
            </div>
            <img src="/images/react.svg" alt="language" className="absolute top-[-50px] left-[21%]" />
          </div>
          <div className="bg-card relative h-[198px]">
            <div className="w-[190px] pt-[78px] px-[15%]">
              <h1 className="bg-gradient-to-r from-gradient-300 to-gradient-400 text-center bg-clip-text text-transparent font-semibold text-[32px] leading-[48px]">10+</h1>
              <p className="font-semibold text-[16px] leading-6 text-white text-center">HTML+CSS</p>
            </div>
            <img src="/images/htmlcss.svg" alt="language" className="absolute top-[-50px] left-[21%]" />
          </div>
          <div className="bg-card relative h-[198px]">
            <div className="w-[190px] pt-[78px] px-[15%]">
              <h1 className="bg-gradient-to-r from-gradient-300 to-gradient-400 text-center bg-clip-text text-transparent font-semibold text-[32px] leading-[48px]">10+</h1>
              <p className="font-semibold text-[16px] leading-6 text-white text-center">Data Structure & Algorithm</p>
            </div>
            <img src="/images/ds.svg" alt="language" className="absolute top-[-50px] left-[21%]" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Language;
